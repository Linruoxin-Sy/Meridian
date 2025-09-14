import fs from 'fs';
import { join, dirname } from 'path';
import { runCommand } from '@/utils';
import { PackageJson } from '@/parse/interfaces';

// 写入 package.json
async function writePackageJson(tempDir: string, packageJson: PackageJson) {
  const packageJsonPath = join(tempDir, 'package.json');
  fs.mkdirSync(dirname(packageJsonPath), { recursive: true });
  await fs.promises.writeFile(
    packageJsonPath,
    JSON.stringify(packageJson),
    'utf8'
  );
}

// 创建 lock 文件
async function createLockFile(tempDir: string) {
  const cmd = `npm install --package-lock-only --force`;
  await runCommand(cmd, tempDir); // 在工作目录中执行命令
}

export async function generateLock(tempDir: string, packageJson: PackageJson) {
  // 1. 将 package.json 写入工作目录
  await writePackageJson(tempDir, packageJson);
  // 2. 生成 lock 文件
  await createLockFile(tempDir);
}
