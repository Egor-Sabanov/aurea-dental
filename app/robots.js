export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://aurea-dental.example/sitemap.xml",
  };
}
