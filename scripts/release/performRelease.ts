import { ReleaseConfigProvider } from "./lib/ReleaseConfigProvider.ts";

const config = ReleaseConfigProvider.config;

const getDockerBuildCommand = (tag: string) => ["docker", "build", "-t", tag, "."];

const createDockerImageTag = (version: string) =>
  `${config.artifactRegistry}/${config.gcloudServiceName}:${version}`;

async function runCommand(cmd: string[]) {
  const command = new Deno.Command(cmd[0], { args: cmd.slice(1), stdout: "piped", stderr: "piped" });
  const child = command.spawn();

  const stdoutPromise = (async () => {
    for await (const chunk of child.stdout) {
      await Deno.stdout.write(chunk);
    }
  })();

  const stderrPromise = (async () => {
    for await (const chunk of child.stderr) {
      await Deno.stderr.write(chunk);
    }
  })();

  const status = await child.status;
  await Promise.all([stdoutPromise, stderrPromise]);

  if (!status.success) throw new Error(`Command failed with exit code ${status.code}`);
}

const runDockerBuildCommand = async (tag: string) => {
  await runCommand(getDockerBuildCommand(tag));
  await runCommand(["docker", "push", tag]);
};

const deployToCloudRun = async (imageUri: string) => {
  console.log('Deploying to cloud run:', imageUri);
  await runCommand(["gcloud", "run", "deploy", config.gcloudServiceName, "--image", imageUri, "--region", "us-west2", "--project", "foxtail-362109"]);
};

const buildAndDeploy = async () => {
  const imageTag = createDockerImageTag('latest');
  await runDockerBuildCommand(imageTag);
  await deployToCloudRun(imageTag);
};

buildAndDeploy();
