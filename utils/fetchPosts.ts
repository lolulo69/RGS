// Fetches posts from wordpress.com api
export const fetchPosts = async (categorySlug?: string) => {
  let URL =
    "https://public-api.wordpress.com/rest/v1.1/sites/lolulo1337.wordpress.com/posts";
  if (categorySlug) {
    URL = `https://public-api.wordpress.com/rest/v1.1/sites/lolulo1337.wordpress.com/posts?category=${categorySlug}`;
  }
  const res = await fetch(URL);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.posts;
};

export const fetchOnePost = async (postSlug: string) => {
  const res = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/lolulo1337.wordpress.com/posts/slug:${postSlug}`,
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
};
