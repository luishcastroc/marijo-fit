import _fetch from 'isomorphic-fetch';
import { useState, useEffect } from 'react';

const gql = String.raw;

export default function useLatestLinks() {
  const [links, setLinks] = useState();

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
              links {
                _id
                title
                link
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLinks(res.data.SiteSettings.links);
      });
  }, []);

  return { links };
}
