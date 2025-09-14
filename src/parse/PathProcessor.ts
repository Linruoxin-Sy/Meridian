import { isRemoteUrl } from "@/utils";
import { PackageJson, PathHandler } from "./interfaces";
import { LocalPathHandler } from "./LocalPathHandler";
import { RemoteUrlHandler } from "./RemoteUrlHandler";

export class PathProcessor {
  // 根据路径类型返回对应的处理器
  private static getHandler(path: string): PathHandler {
    if (isRemoteUrl(path)) {
      return new RemoteUrlHandler();
    } else {
      return new LocalPathHandler();
    }
  }

  // 获取 package.json
  public static async getPackageJson(userPath: string): Promise<PackageJson> {
    const handler = this.getHandler(userPath);
    return handler.getPackageJson(userPath);
  }
}
