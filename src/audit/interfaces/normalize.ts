import { AuditVulnerability } from "./AuditJson";

export interface NormalizedPackageInfo {
  name: string;
  severity: AuditVulnerability["severity"];
  problems: AuditVulnerability["via"];
  nodes: string[];
  depChains?: string[][];
}

export interface NormalizedAuditResult {
  vulnerabilities: {
    critical: NormalizedPackageInfo[];
    high: NormalizedPackageInfo[];
    moderate: NormalizedPackageInfo[];
    low: NormalizedPackageInfo[];
  };
  summary?: {
    total: number;
    critical: number;
    high: number;
    moderate: number;
    low: number;
  };
}

/**
 * 审计结果类型 - 用于单个包的审计结果
 */
export interface AuditResult {
  /** 包名 */
  name: string;
  /** 版本范围 */
  range: string;
  /** 依赖树中的节点 */
  nodes: string[];
  /** 依赖链 */
  depChains: string[][];
  /** 漏洞问题列表 */
  problems: AuditProblem[];
  /** 最高严重程度 */
  severity: "info" | "low" | "moderate" | "high" | "critical";
}

/**
 * 审计问题详情
 */
export interface AuditProblem {
  /** 漏洞来源 ID */
  source?: number;
  /** 包名 */
  name: string;
  /** 依赖名称 */
  dependency: string;
  /** 漏洞标题 */
  title: string;
  /** 漏洞详情链接 */
  url: string;
  /** 严重程度 */
  severity: "info" | "low" | "moderate" | "high" | "critical";
  /** CWE 列表 */
  cwe?: string[];
  /** CVSS 评分信息 */
  cvss?: {
    score: number;
    vectorString: string;
  };
  /** 受影响的版本范围 */
  range: string;
}
