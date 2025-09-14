import { getDepChains } from "./getDepChain";
import { AuditJson, AuditVulnerability } from "./interfaces/AuditJson";
import { NormalizedAuditResult, NormalizedPackageInfo } from "./interfaces/normalize";

function _normalizeVulnerabilities(auditResult: AuditJson) {
  const result: NormalizedAuditResult['vulnerabilities'] = {
    critical: [],
    high: [],
    moderate: [],
    low: [],
  };
  for (const key in auditResult.vulnerabilities) {
    const packageInfo = auditResult.vulnerabilities[key];
    const normalizedPackage = _normalizePackage(packageInfo);
    if (normalizedPackage && normalizedPackage.severity !== 'info') {
      result[normalizedPackage.severity as keyof typeof result].push(normalizedPackage);
    }
  }

  function _normalizePackage(packageInfo: AuditVulnerability) {
    const { via = [] } = packageInfo;
    const validVia = via.filter((it) => typeof it === "object");
    if (validVia.length === 0) {
      return null;
    }
    const info: NormalizedPackageInfo = {
      name: packageInfo.name,
      severity: packageInfo.severity,
      problems: validVia,
      nodes: packageInfo.nodes || [],
    };
    info.depChains = getDepChains(packageInfo, auditResult.vulnerabilities);
    info.depChains = info.depChains.filter(
      (chain) => !isInvalidChain(chain, packageInfo.name)
    );
    return info;
  }

  return result;
}

function isInvalidChain(chain: string[], packageName: string) {
  return chain.length === 0 || (chain.length === 1 && chain[0] === packageName);
}

export function normalizeAuditResult(auditResult: AuditJson): NormalizedAuditResult {
  return {
    vulnerabilities: _normalizeVulnerabilities(auditResult),
  };
}
