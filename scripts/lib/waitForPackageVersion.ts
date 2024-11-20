import chalk from "chalk";

const delayMs = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function waitForPackageVersion(packageName: string, version: string) {
  const registryUrl = `https://registry.npmjs.org/${encodeURIComponent(packageName)}`;
  let attempts = 0
  while (true) {
    const response = await fetch(registryUrl);
    if (response.ok) {
      const data = await response.json();
      if (data.versions && data.versions[version]) {
        if (attempts > 0) {
          console.log(chalk.green(`${packageName}@${version} is now available!`));
        }
        break; // Version is available
      }
    }
    // Wait for 30 seconds before retrying
    console.log(chalk.yellow(`Still waiting for ${packageName}@${version} to be available...`));
    await delayMs(15000);
    attempts++;
  }
}