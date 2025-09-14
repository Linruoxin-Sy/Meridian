import { NormalizedAuditResult } from "@/audit/interfaces/normalize";
import { PackageJson } from "@/parse/interfaces";

// 基础渲染器接口
export interface Renderer {
  render(auditResult: NormalizedAuditResult, packageJson: PackageJson): Promise<string>;
}

// 支持的渲染格式
export type RenderFormat = 'markdown' | 'html';
