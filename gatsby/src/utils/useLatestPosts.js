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
            allPost(limit: 2, sort: { publishedAt: DESC }) {
              _id
              slug {
                current
              }
              title
              subtitle
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
              bodyRaw
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.allPost);
        setPosts(res.data.allPost);
      });
  }, []);

  return { posts };
}
