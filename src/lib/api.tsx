const API_URL = process.env.WP_API_URL;

const dev = process.env.WP_API_URL !== "production";

export const server: any = dev
  ? "https://manuelm83.sg-host.com/graphql/"
  : API_URL;

async function fetchAPI(query: any, { variables }: any = {}) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(server, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
    // throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getAllPosts(locale: any) {
  const data = await fetchAPI(
    `
      query AllPosts($categoryName: String!) {
        posts(first: 20, where: {categoryName: $categoryName, orderby: { field: DATE, order: DESC}}) {
          edges {
            node {
              id
              date
              title
              slug
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
      `,
    {
      variables: {
        categoryName: locale,
      },
    }
  );

  return data?.posts;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
      {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );
  return data?.posts;
}
export async function getPost(slug: any) {
  const data = await fetchAPI(
    `
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          title
            excerpt
            slug
            date
            categories {
              edges {
                node {
                  name
                }
              }
            }
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl(size: _2048X2048)
              }
            }
          content
        }
      }
    `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  return data;
}
