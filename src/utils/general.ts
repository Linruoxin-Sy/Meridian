export function isRemoteUrl(path: string): boolean {
  return /^(https?|git):\/\/.+/i.test(path) || path.startsWith('git@');
}