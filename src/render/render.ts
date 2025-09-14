import { RenderFormat } from './interfaces';
import { NormalizedAuditResult } from '@/audit/interfaces/normalize';
import { PackageJson } from '@/parse/interfaces';
import { RendererFactory } from './renderer/RendererFactory';

/**
 * 渲染审计结果
 * @param auditResult 审计结果数据
 * @param packageJson 包信息
 * @param format 渲染格式，默认为 markdown
 * @returns 渲染后的字符串
 */
export async function render(
  auditResult: NormalizedAuditResult, 
  packageJson: PackageJson, 
  format: RenderFormat = 'markdown'
): Promise<string> {
  try {
    const renderer = RendererFactory.createRenderer(format);
    return await renderer.render(auditResult, packageJson);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : '未知错误';
    throw new Error(`渲染失败: ${errorMessage}`);
  }
}

/**
 * 获取所有支持的渲染格式
 * @returns 支持的格式数组
 */
export function getSupportedFormats(): RenderFormat[] {
  return RendererFactory.getSupportedFormats();
}