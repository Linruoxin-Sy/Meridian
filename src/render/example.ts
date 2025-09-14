import { render, getSupportedFormats } from '@/render';
import { NormalizedAuditResult } from '@/audit/interfaces/normalize';
import { PackageJson } from '@/parse/interfaces';

// 使用示例
export async function renderExample() {
  // 模拟审计结果数据
  const mockAuditResult: NormalizedAuditResult = {
    vulnerabilities: {
      critical: [],
      high: [],
      moderate: [],
      low: []
    },
    summary: {
      total: 5,
      critical: 1,
      high: 2,
      moderate: 1,
      low: 1
    }
  };

  const mockPackageJson: PackageJson = {
    name: 'test-project',
    version: '1.0.0'
    // ... 其他属性
  };

  try {
    // 使用 Markdown 格式渲染（默认）
    const markdownResult = await render(mockAuditResult, mockPackageJson);
    console.log('Markdown 渲染结果:', markdownResult);

    // 使用 HTML 格式渲染
    const htmlResult = await render(mockAuditResult, mockPackageJson, 'html');
    console.log('HTML 渲染结果:', htmlResult);

    // 获取支持的格式列表
    const supportedFormats = getSupportedFormats();
    console.log('支持的渲染格式:', supportedFormats);

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : '未知错误';
    console.error('渲染失败:', errorMessage);
  }
}