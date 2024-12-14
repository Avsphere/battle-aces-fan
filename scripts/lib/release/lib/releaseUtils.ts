import { ReleaseConfigProvider } from "./ReleaseConfigProvider.ts";

const createDockerImageTag = (version: string) => {
  return `${ReleaseConfigProvider.config.artifactRegistry}/${ReleaseConfigProvider.config.gcloudServiceName}:${version}`
}

const getDockerBuildCommand = async (tag: string) => {
  const command = `docker build -t ${tag} .`

  return command
}

async function streamExec(command: string): Promise<void> {
  // Create a new Deno Command to execute the shell command
  const cmd = new Deno.Command("/bin/sh", {
    args: ["-c", command],
    stdout: "piped",
    stderr: "piped",
  });

  // Spawn the command
  const child = cmd.spawn();

  // Function to read from a ReadableStream and output data
  async function readStream(
    stream: ReadableStream<Uint8Array>,
    outputFunction: (text: string) => void,
  ) {
    const reader = stream.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      outputFunction(decoder.decode(value));
    }
  }

  // Read from stdout and stderr streams
  const stdoutPromise = readStream(child.stdout, console.log);
  const stderrPromise = readStream(child.stderr, console.error);

  // Wait for the command to complete
  const status = await child.status;

  // Ensure all streams have been read
  await Promise.all([stdoutPromise, stderrPromise]);

  // Resolve or reject based on the command's exit status
  if (status.success) {
    return;
  } else {
    throw new Error(`Command failed with exit code ${status.code}`);
  }
}

const buildDockerImage = async (version : string) => {
  const tag = createDockerImageTag(version)
  const command = await getDockerBuildCommand(tag)
  const result = await streamExec(command)

  return result
}

const deployToCloudRun = async (imageUri: string) => {
  console.log('Deploying to cloud run: imageUri', imageUri)
  const command = `gcloud run deploy ${ReleaseConfigProvider.config.gcloudServiceName} --image ${imageUri} --region us-west1`

  const result = await streamExec(command)

  return result
}


export const releaseUtils = {
  createDockerImageTag,
  getDockerBuildCommand,
  deployToCloudRun,
  buildDockerImage
}

/**
 *     docker run -p 3000:8080 -v $(pwd)/.env:/app/.env your-image-name
 */