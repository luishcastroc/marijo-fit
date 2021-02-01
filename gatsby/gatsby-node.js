import path from 'path';

async function turnPostsIntoPages({ graphql, actions }) {
  const postTemplate = path.resolve('./src/templates/Post.js');

  const { data } = await graphql(`
    query {
      posts: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        totalCount
        nodes {
          _id
          title
          slug {
            current
          }
        }
      }
    }
  `);

  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.posts.totalCount / pageSize);

  data.posts.nodes.forEach((post) => {
    actions.createPage({
      path: `blog/${post.slug.current}`,
      component: postTemplate,
      context: { slug: post.slug.current },
    });
  });

  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/blog/${i + 1}`,
      component: path.resolve('./src/pages/blog.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  await Promise.all([turnPostsIntoPages(params)]);
}
