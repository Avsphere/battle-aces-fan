import chalk from "chalk";
import { ReleaseConfigProvider } from "../lib/ReleaseConfigProvider.ts";
import { releaseUtils } from "../lib/releaseUtils.ts";



const config = ReleaseConfigProvider.config

console.log(chalk.blueBright('Building docker image config'))


const buildCommandOut = await releaseUtils.buildDockerImage('latest')


