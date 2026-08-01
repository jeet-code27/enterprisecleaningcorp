import { MetadataRoute } from "next";
import dbConnect from "@/lib/mongoose";
import Post from "@/models/Post";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://www.enterprisecleaningcorp.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const coreRoutes = [
    "",
    "/about",
    "/commercial-cleaning-faq",
    "/contact",
    "/blog",
    "/success-stories",
    "/privacy-policy",
    "/terms-and-conditions",
    "/alex-puchulu-business-card",
    "/juilio-biage-business-card",
    "/stephen-buchter-business-card",
  ];
  
  const successStoryRoutes = [
    "/success-stories/wcu-bank",
    "/success-stories/apderm",
    "/success-stories/coghlin-companies",
  ];

  const serviceRoutes = [
    "/day-and-night-shift-commercial-cleaning-services-central-ma",
    "/floor-care-services-central-ma",
    "/specialty-cleaning-services-central-ma",
    "/emergency-restoration-services-central-ma",
    "/turnover-cleaning-central-ma",
    "/post-construction-cleaning-central-ma",
  ];

  const industryRoutes = [
    "/manufacturing-industrial-cleaning-central-ma",
    "/medical-healthcare-cleaning-central-ma",
    "/office-financial-cleaning-central-ma",
    "/school-municipal-cleaning-central-ma",
    "/property-management-cleaning-central-ma",
    "/warehouse-distribution-cleaning-central-ma",
    "/real-estate-cleaning-central-ma",
  ];

  const cityRoutes = [
    "/commercial-cleaning-worcester-ma",
    "/commercial-cleaning-shrewsbury-ma",
    "/commercial-cleaning-west-boylston-ma",
    "/commercial-cleaning-providence-ri",
    "/commercial-cleaning-lowell-ma",
    "/commercial-cleaning-waltham-ma",
    "/commercial-cleaning-framingham-ma",
    "/commercial-cleaning-leominster-ma",
    "/commercial-cleaning-fitchburg-ma",
    "/commercial-cleaning-boylston-ma",
    "/commercial-cleaning-nashua-nh",
  ];

  const sitemap: MetadataRoute.Sitemap = [
    ...coreRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.9,
    })),
    ...successStoryRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...serviceRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...industryRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...cityRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];

  try {
    await dbConnect();
    const posts = await Post.find({ status: "Published" })
      .select("slug updatedAt seo")
      .lean();

    const postRoutes = posts.map((post: any) => {
      // Ensure canonical slug match and clean URL format
      const postSlug = post.slug?.trim();
      return {
        url: `${baseUrl}/blog/${postSlug}`,
        lastModified: post.updatedAt || new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      };
    });

    sitemap.push(...postRoutes);
  } catch (error) {
    console.error("Error generating sitemap for blog posts:", error);
  }

  return sitemap;
}
