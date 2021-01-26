import _fetch from 'isomorphic-fetch';
import { useState, useEffect } from 'react';

const gql = String.raw;

export default function useLatestPosts() {
  const [posts, setPosts] = useState();

  useEffect(function () {
    _fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            SiteSettings(id: "downtown") {
              posts {
                _id
                _createdAt
                slug {
                  current
                }
                author {
                  name
                }
                mainImage {
                  asset {
                    url
                    metadata {
                      lqip
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.data.SiteSettings.posts);
      });
  }, []);

  return { posts };
}
