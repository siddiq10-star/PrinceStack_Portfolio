import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "node:fs";

const BASE_URL = "https://princestack-portfolio.netlify.app";

// List your routes (React SPA paths)
const routes = ["/", "/projects", "/skills", "/contact"];

// Create the sitemap stream
const sitemap = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream("public/sitemap.xml");

sitemap.pipe(writeStream);

routes.forEach((url) => {
  sitemap.write({ url, changefreq: "weekly", priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then(() => console.log("✅ Sitemap generated"));
