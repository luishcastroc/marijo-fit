import dotenv from 'dotenv';

// Important this dotenv.config is setting up on default (.env) if this the setup then usually is not needed since is the default

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: 'Marijo Fit Life',
    description: `Página dedicada a la nutrición y buenos hábitos alimenticios`,
    twitter: '@majofitlife',
    facebook: 'Majo Fit Life',
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'h9g2ygm1',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'bgimages',
        path: './src/assets/images',
      },
      __key: 'bgimages',
    },
  ],
};
