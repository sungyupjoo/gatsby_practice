import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Gatsby practice">
      <p>Gatsby Tutorial</p>
      <StaticImage alt="Clifford Brown" src="../images/clifford.webp" />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Gatsby practice" />;
