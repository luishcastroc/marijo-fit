import _fetch from 'isomorphic-fetch';
import { useState, useEffect } from 'react';

const gql = String.raw;

export default function useLatestData() {
  const [data, setData] = useState();

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
              email
              phone
              socialnetworks {
                _id
                type
                user
                link
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data.SiteSettings);
      });
  }, []);

  return data;
}
