import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Gatsby practice">
      <p>Gatsby Tutorial</p>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Gatsby practice</title>;
