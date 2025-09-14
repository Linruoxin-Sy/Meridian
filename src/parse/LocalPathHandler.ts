import path from "path";
import fs from "fs/promises";
import { PackageJson, PathHandler } from "./interfaces";

export class LocalPathHandler implements PathHandler {
  async getPackageJson(localPath: string): Promise<PackageJson> {
    // 解析路径，找到package.json
    const fullPath = path.resolve(process.cwd(), localPath);
    const packageJsonPath = path.join(fullPath, "package.json");

    try {
      const data = await fs.readFile(packageJsonPath, "utf8");
      return JSON.parse(data);
    } catch (error: any) {
      throw new Error(`无法读取package.json: ${error.message}`);
    }
  }
}
