import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { audit } from "..";

const server = new McpServer({
  name: "audit-server",
  title: "前端工程安全审计工具",
  version: "0.1.0",
});

server.registerTool(
  "audit",
  {
    title: "审计前端工程",
    description:
      "审计前端工程的所有直接和间接依赖，得到安全审计结果。支持本地工程的审计，也支持远程仓库的审计。审计结果默认为标准格式的markdown字符串，不用修改，直接用于展示即可。",
    inputSchema: {
      projectRoot: z
        .string()
        .describe("前端工程的根目录，可以是本地路径，也可以是远程仓库地址"),
      savePath: z.string().describe("审计结果保存的路径，可以是本地路径"),
      renderFormat: z
        .enum(["markdown", "html"])
        .optional()
        .default("markdown")
        .describe(
          "审计结果的渲染格式，支持markdown和html两种格式，默认为markdown"
        ),
    },
  },
  async ({ projectRoot, savePath, renderFormat }) => {
    await audit(projectRoot, savePath, renderFormat);
    return {
      content: [
        {
          type: "text",
          text: `审计完成，结果已保存到 ${savePath} 文件中`,
        }
      ]
    }
  }
);

const transport = new StdioServerTransport();
server.connect(transport);