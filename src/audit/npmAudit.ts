import { runCommand } from "@/utils";
import { AuditJson } from "./interfaces/AuditJson";

// 支持 audit 的源
const npmSource = 'https://registry.npmjs.org/';

export async function npmAudit(workDir: string) {
  const cmd = `npm audit --json --registry ${npmSource}`;
  const jsonResult = await runCommand(cmd, workDir); // 在工作目录中执行命令
  const auditData: AuditJson = JSON.parse(jsonResult);
  return auditData;
}
