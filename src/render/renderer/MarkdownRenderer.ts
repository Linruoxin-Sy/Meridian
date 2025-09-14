import { Renderer } from '../interfaces';
import { NormalizedAuditResult } from '@/audit/interfaces/normalize';
import { PackageJson } from '@/parse/interfaces';
import { getDirname } from '@/utils';
import ejs from 'ejs';
import path from 'path';


export class MarkdownRenderer implements Renderer {
  private templatePath: string;

  constructor() {
    this.templatePath = path.join(getDirname(import.meta.url), '..', 'template', 'markdown');
  }

  async render(auditResult: NormalizedAuditResult, packageJson: PackageJson): Promise<string> {
    const templateFile = path.join(this.templatePath, 'index.ejs');
    
    const templateData = {
      audit: auditResult,
      packageJson: packageJson,
      desc: {
        severityLevels: {
          critical: '关键',
          high: '高风险',
          moderate: '中风险',
          low: '低风险'
        }
      }
    };

    try {
      const result = await ejs.renderFile(templateFile, templateData, {
        root: this.templatePath
      });
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '未知错误';
      throw new Error(`Markdown渲染失败: ${errorMessage}`);
    }
  }
}