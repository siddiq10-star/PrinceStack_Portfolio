import { writeFileSync } from "node:fs";

const robots = `User-agent: *
Allow: /
Sitemap: https://princestack-portfolio.netlify.app/sitemap.xml
`;

writeFileSync("public/robots.txt", robots);
console.log("✅ Robots.txt generated");
