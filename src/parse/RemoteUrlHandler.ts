import {
  PackageJson,
  PathHandler,
  RemotePlatformHandler,
  RepositoryInfo,
} from "./interfaces";
import { GitHubHandler } from "./gitHandlers/GitHubHandler";
import { URL } from "url";
import { GiteeHandler } from "./gitHandlers/GiteeHandler";
import { GitLabHandler } from "./gitHandlers/GitLabHandler";

export class RemoteUrlHandler implements PathHandler {
  private getPlatformHandler(remoteUrl: string): RemotePlatformHandler {
    // 解析URL，获取平台
    const platform = this.parsePlatform(remoteUrl);
    switch (platform) {
      case "github":
        return new GitHubHandler();
      case "gitlab":
        return new GitLabHandler();
      case "gitee":
        return new GiteeHandler();
      default:
        throw new Error(`不支持的远程平台: ${platform}`);
    }
  }

  private parsePlatform(remoteUrl: string): string {
    if (remoteUrl.includes("github.com")) {
      return "github";
    } else if (remoteUrl.includes("gitlab.com")) {
      return "gitlab";
    } else if (remoteUrl.includes("gitee.com")) {
      return "gitee";
    }
    // 可以扩展其他平台...
    throw new Error(`无法识别的远程平台: ${remoteUrl}`);
  }

  async getPackageJson(remoteUrl: string): Promise<PackageJson> {
    const platformHandler = this.getPlatformHandler(remoteUrl);
    const repoInfo = this.parseRepositoryInfo(remoteUrl);
    return platformHandler.downloadAndGetPackageJson(repoInfo);
  }

  private parseRepositoryInfo(remoteUrl: string): RepositoryInfo {
    // 解析URL，获取owner、repo、branch、path等信息
    // 这里以GitHub为例，实际需要处理不同平台和格式（如SSH/HTTPS）
    const parsed = new URL(remoteUrl);
    const match = parsed.pathname?.match(
      /\/([^\/]+)\/([^\/]+)(?:\/tree\/([^\/]+)(?:\/(.*))?)?/
    );
    if (!match) {
      throw new Error(`无法解析远程仓库URL: ${remoteUrl}`);
    }
    const [, owner, repo, branch, path] = match;
    return {
      platform: this.parsePlatform(remoteUrl),
      owner,
      repo,
      branch: branch || "main", // 默认分支
      path: path || "",
    };
  }
}
