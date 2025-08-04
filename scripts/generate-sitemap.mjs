import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "node:fs";

const BASE_URL = "https://princestack-portfolio.netlify.app";

// Only the homepage is indexed
const routes = ["/"];

const sitemap = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream("public/sitemap.xml");

sitemap.pipe(writeStream);

routes.forEach((url) => {
  sitemap.write({ url, changefreq: "weekly", priority: 1.0 });
});

sitemap.end();

streamToPromise(sitemap).then(() =>
  console.log("✅ Sitemap generated with homepage only")
);
