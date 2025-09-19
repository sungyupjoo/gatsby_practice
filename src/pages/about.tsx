import { HeadFC, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <Link to="https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/">
        SEO link
      </Link>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <>
    <title>About me</title>
    <meta name="description" content="seo" />
  </>
);
