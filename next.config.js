/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // IMPORTANT: basePath/assetPrefix must exactly match your GitHub repo name
  // for GitHub Pages project sites (e.g. github.com/your-org/vexupage deploys
  // to your-org.github.io/vexupage). If you rename the repo, update this too.
  // If you set up a custom domain instead, delete these two lines entirely.
  basePath: "/vexupage-main",
  assetPrefix: "/vexupage-main/",
};

module.exports = nextConfig;