import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function runCommand(cmd: string, cwd: string) {
  try {
    const result = await execAsync(cmd, {
      cwd,
      encoding: 'utf-8',
    });
    return result.stdout.toString();
  } catch (err: any) {
    // npm audit 在发现漏洞时会返回非零退出码，但仍然输出有效的 JSON
    // 检查是否有 stdout 输出
    if (err.stdout && err.stdout.trim()) {
      return err.stdout.toString();
    }
    
    // 如果有 stderr 但没有 stdout，抛出更详细的错误信息
    if (err.stderr) {
      throw new Error(`Command failed: ${err.stderr}`);
    }
    
    // 重新抛出原始错误
    throw err;
  }
}