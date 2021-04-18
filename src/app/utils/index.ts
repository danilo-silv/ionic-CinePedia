export function getLastItemPath(path: string) {
  return path.substring(path.lastIndexOf('/') + 1);
}
