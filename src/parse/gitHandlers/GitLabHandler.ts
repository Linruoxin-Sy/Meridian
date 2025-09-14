import { PackageJson, RemotePlatformHandler, RepositoryInfo } from "../interfaces";

export class GitLabHandler implements RemotePlatformHandler {
  async downloadAndGetPackageJson(
    repoInfo: RepositoryInfo
  ): Promise<PackageJson> {
    // 构建下载URL（例如：https://gitlab.com/api/v4/projects/owner%2Frepo/repository/files/package.json?ref=branch）
    const downloadUrl = `https://gitlab.com/api/v4/projects/${encodeURIComponent(
      `${repoInfo.owner}/${repoInfo.repo}`
    )}/repository/files/${encodeURIComponent(
      `${repoInfo.path ? repoInfo.path + "/" : ""}package.json`
    )}?ref=${repoInfo.branch || "main"}`;

    // 使用axios或node-fetch下载文件
    const response = await fetch(downloadUrl);
    if (!response.ok) {
      throw new Error(`下载package.json失败: ${response.statusText}`);
    }
    const data = (await response.json()) as any;

    // GitLab API返回的是base64编码的内容
    if (data.content) {
      const content = Buffer.from(data.content, "base64").toString("utf8");
      return JSON.parse(content);
    } else {
      throw new Error("未找到package.json");
    }
  }
}
