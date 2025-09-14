import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { uniqueId } from "./uniqueId";

const __dirname = dirname(fileURLToPath(import.meta.url));

const basePath = join(__dirname, "../../");

// 创建临时目录
export async function createTempDir() {
  const tempDir = join(basePath, `temp-${uniqueId()}`);
  await fs.promises.mkdir(tempDir);
  return tempDir;
}

// 删除目录及其内容
export async function removeDir(dirPath: string) {
  await fs.promises.rm(dirPath, { recursive: true, force: true });
}

// 获取文件名
export function getFilename(importMetaUrl: string) {
  return fileURLToPath(importMetaUrl);
}

// 获取目录名
export function getDirname(importMetaUrl: string) {
  return dirname(getFilename(importMetaUrl));
}
