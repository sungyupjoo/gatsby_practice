import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { HeadFC, graphql } from 'gatsby';

interface BlogPost {
  id: string;
  frontmatter: { date: string; title: string };
  excerpt: string;
}

const BlogPage = ({
  data,
}: {
  data: {
    allMdx: {
      nodes: BlogPost[];
    };
  };
}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="My Blog Posts" />;

export default BlogPage;
