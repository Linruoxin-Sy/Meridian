/**
 * npm audit v1 API 响应体类型
 */
export interface NpmAuditResponse {
  actions: AuditAction[];
  advisories: Record<string, AuditAdvisory>;
  metadata: AuditMetadata;
}

/**
 * 修复操作
 */
interface AuditAction {
  /** 操作类型：update | install | review */
  action: string;
  /** 受影响的模块 */
  module: string;
  /** 建议更新到的版本（某些情况下存在） */
  target?: string;
  /** 需要解决的漏洞 */
  resolves: AuditResolve[];
}

/**
 * 与某个漏洞的关联
 */
interface AuditResolve {
  /** 漏洞 ID */
  id: number;
  /** 漏洞路径，如 "lodash>sub-dep" */
  path: string;
  /** 是否 devDependencies */
  dev: boolean;
  /** 是否 optionalDependencies */
  optional: boolean;
  /** 是否 bundledDependencies */
  bundled: boolean;
}

/**
 * 漏洞详情
 */
interface AuditAdvisory {
  /** 漏洞 ID */
  id?: number;
  /** 包名 */
  module_name: string;
  /** 漏洞标题 */
  title: string;
  /** 漏洞等级：info | low | moderate | high | critical */
  severity: "info" | "low" | "moderate" | "high" | "critical";
  /** 受影响的版本范围 */
  vulnerable_versions: string;
  /** 已修复的版本范围 */
  patched_versions: string;
  /** 建议措施 */
  recommendation: string;
  /** 漏洞详情链接 */
  url: string;
  /** CWE 列表 */
  cwe?: string[];
  /** CVSS 评分 */
  cvss?: {
    score: number;
    vectorString: string;
  };
  /** 报告人 */
  found_by?: { name: string };
  reported_by?: { name: string };
}

/**
 * 审计统计信息
 */
interface AuditMetadata {
  vulnerabilities: {
    info: number;
    low: number;
    moderate: number;
    high: number;
    critical: number;
  };
  dependencies: number;
  devDependencies: number;
  optionalDependencies: number;
  totalDependencies: number;
}
