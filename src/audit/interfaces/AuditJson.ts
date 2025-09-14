export interface AuditVulnerability {
  // 包名
  name: string;
  // 漏洞严重程度
  severity: "info" | "low" | "moderate" | "high" | "critical";
  // 是否为直接依赖
  isDirect: boolean;
  // 漏洞来源路径
  via: string[] | object[];
  // 受影响的包
  effects: string[];
  // 受影响的版本范围
  range: string;
  // 依赖树中的节点
  nodes: string[];
  // 修复信息
  fixAvailable?:
    | boolean
    | {
        // 修复包名
        name: string;
        // 修复版本
        version: string;
        // 是否为主版本更新
        isSemVerMajor: boolean;
      };
}

interface AuditMetadata {
  // 漏洞统计
  vulnerabilities: {
    // 信息级别数量
    info: number;
    // 低危数量
    low: number;
    // 中危数量
    moderate: number;
    // 高危数量
    high: number;
    // 严重数量
    critical: number;
    // 总数
    total: number;
  };
  // 依赖统计
  dependencies: {
    // 生产依赖
    prod: number;
    // 开发依赖
    dev: number;
    // 可选依赖
    optional: number;
    // 对等依赖
    peer: number;
    // 可选对等依赖
    peerOptional: number;
    // 总数
    total: number;
  };
}

export interface AuditJson {
  auditReportVersion: number;
  vulnerabilities: Record<string, AuditVulnerability>;
  metadata: AuditMetadata;
}