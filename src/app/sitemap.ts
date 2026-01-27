import { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/ausbildung-germany",
  "/contact",
  "/germany-partner",
  "/guidance",
  "/help",
  "/learn-german",
  "/studienkolleg",
  "/study-germany",
  "/success",
  "/tools",
  "/tools/cv-builder",
  "/tools/document-checklist",
  "/tools/motivation-builder",
  "/tools/pathway-planner",
  "/tools/readiness-test",
  "/work-in-germany",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${site.domain}`;
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}
