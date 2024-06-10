export default async function sitemap() {
  let routes = ['', '/blog', '/about', '/projects', '/work', '/lab'].map(
    (route) => ({
      url: `https://sanicodeplayground.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes];
}
