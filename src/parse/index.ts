import { PathProcessor } from "./PathProcessor";

export async function parseProject(projectRoot: string) {
  return await PathProcessor.getPackageJson(projectRoot);
}