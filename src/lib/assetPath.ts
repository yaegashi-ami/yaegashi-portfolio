const basePath =
  process.env.NODE_ENV === "production" ? "/yaegashi-portfolio" : "";

/** Add the GitHub Pages base path to root-relative public assets in production. */
export function assetPath(path: string) {
  if (!path.startsWith("/") || path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}
