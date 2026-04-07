import type { MetadataRoute } from "next";

const BASE_URL = "https://dofix.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // Add your real service pages here ONLY if they exist
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/ac-repair`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/washing-machine-repair`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/refrigerator-repair`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/microwave-repair`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/plumbing-services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/electrical-services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/carpenter-services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/painting-services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];

  // Add your real city/location pages here ONLY if they exist
  const cityPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/noida`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/delhi`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/gurgaon`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/ghaziabad`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/greater-noida`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  // If blog exists, add real blog slugs only
  const blogPages: MetadataRoute.Sitemap = [
    // { url: `${BASE_URL}/blog/example-post`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...blogPages,
  ];
}