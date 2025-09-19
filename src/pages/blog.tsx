import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { HeadFC, graphql } from 'gatsby';

const BlogPage = ({
  data,
}: {
  data: { allFile: { nodes: { name: string }[] } };
}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool blog posts</p>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default BlogPage;
