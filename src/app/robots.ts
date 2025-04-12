import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Mobile",
        allow: "/",
      },
    ],
    sitemap: "https://hashfimw.my.id/sitemap.xml",
    host: "https://hashfimw.my.id",
  };
}
