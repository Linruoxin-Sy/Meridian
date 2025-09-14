import { Renderer, RenderFormat } from '../interfaces';
import { MarkdownRenderer } from './MarkdownRenderer';
import { HtmlRenderer } from './HtmlRenderer';

/**
 * 渲染器工厂 - 使用工厂方法模式
 * 简单的工厂类，根据格式创建相应的渲染器
 */
export class RendererFactory {
  /**
   * 创建指定格式的渲染器
   * @param format 渲染格式
   * @returns 对应的渲染器实例
   */
  static createRenderer(format: RenderFormat): Renderer {
    switch (format) {
      case 'markdown':
        return new MarkdownRenderer();
      case 'html':
        return new HtmlRenderer();
      default:
        throw new Error(`不支持的渲染格式: ${format}`);
    }
  }

  /**
   * 获取所有支持的渲染格式
   * @returns 支持的格式数组
   */
  static getSupportedFormats(): RenderFormat[] {
    return ['markdown', 'html'];
  }
}