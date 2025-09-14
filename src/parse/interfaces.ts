export interface PackageJson {
  [key: string]: any;
  name: string;
  version: string;
  dependencies?: { [key: string]: string };
  devDependencies?: { [key: string]: string };
  peerDependencies?: { [key: string]: string };
  optionalDependencies?: { [key: string]: string };
}

export interface RepositoryInfo {
  platform: string;
  owner: string;
  repo: string;
  branch?: string;
  path?: string;
}

export interface PathHandler {
  getPackageJson(path: string): Promise<PackageJson>;
}

export interface RemotePlatformHandler {
  // 从远程URL下载仓库并返回package.json
  downloadAndGetPackageJson(repoInfo: RepositoryInfo): Promise<PackageJson>;
}