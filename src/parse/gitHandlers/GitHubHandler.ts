import {
  PackageJson,
  RemotePlatformHandler,
  RepositoryInfo,
} from "../interfaces";

export class GitHubHandler implements RemotePlatformHandler {
  async downloadAndGetPackageJson(
    repoInfo: RepositoryInfo
  ): Promise<PackageJson> {
    // 构建下载URL（例如：https://api.github.com/repos/owner/repo/contents/package.json?ref=branch）
    const downloadUrl = `https://api.github.com/repos/${repoInfo.owner}/${
      repoInfo.repo
    }/contents/${repoInfo.path ? repoInfo.path + "/" : ""}package.json?ref=${
      repoInfo.branch
    }`;

    // 使用axios或node-fetch下载文件
    const response = await fetch(downloadUrl);
    if (!response.ok) {
      throw new Error(`下载package.json失败: ${response.statusText}`);
    }
    const data = (await response.json()) as any;

    // GitHub API返回的是base64编码的内容
    if (data.content) {
      const content = Buffer.from(data.content, "base64").toString("utf8");
      return JSON.parse(content);
    } else {
      throw new Error("未找到package.json");
    }
  }
}
