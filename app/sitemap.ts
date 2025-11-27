export const dynamic = "force-static"

export default async function sitemap() {
  return [
    {
      url: "https://kcintuitiveint.com/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://kcintuitiveint.com/about",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://kcintuitiveint.com/contact",
      lastModified: new Date().toISOString(),
    },
  ]
}
