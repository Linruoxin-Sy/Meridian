import fs from "fs";
import { createTempDir, removeDir } from "@/utils";
import { parseProject } from "@/parse";
import { generateLock } from "@/generateLock";
import { auditPackage } from "@/audit";
import { render, RenderFormat } from "@/render";

export async function audit(
  projectRoot: string,
  savePath: string,
  renderFormat: RenderFormat = "markdown"
) {
  // 创建临时目录
  const tempDir = await createTempDir();
  // 获取 package.json 文件，放入临时目录
  const packageJson = await parseProject(projectRoot);
  // 生成lock文件
  await generateLock(tempDir, packageJson);
  // 对工作目录进行审计
  const auditResult = await auditPackage(tempDir, packageJson);
  // 渲染审计结果
  const renderedResult = await render(auditResult, packageJson, renderFormat);
  // 删除临时目录
  await removeDir(tempDir);
  // 将结果保存到指定路径
  await fs.promises.writeFile(savePath, renderedResult, "utf-8");
}
