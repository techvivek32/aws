import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://arizonawomenspecialists.com';

  // In a real app, you would fetch these from your API/DB
  // For now, I'll provide the main routes
  const staticRoutes = [
    '',
    '/services',
    '/weight-loss',
    '/blog',
    '/contact',
    '/cash-pay',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // You can fetch dynamic routes here (e.g., blog posts, services)
  // try {
  //   const servicesRes = await fetch(`${baseUrl}/api/services`);
  //   const services = await servicesRes.json();
  //   const serviceRoutes = services.map((s: any) => ({
  //     url: `${baseUrl}/services/${s.slug}`,
  //     lastModified: new Date(),
  //     priority: 0.7,
  //   }));
  //   return [...staticRoutes, ...serviceRoutes];
  // } catch (e) {
  //   return staticRoutes;
  // }

  return staticRoutes;
}
