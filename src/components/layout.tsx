import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as styles from './layout.module.css';

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      <header className={styles.siteTitle}>
        {data.site.siteMetadata.title}
      </header>
      <nav className={styles.navLinks}>
        <li className={styles.navLinkItem}>
          <Link to="/" className={styles.navLinkText}>
            Home
          </Link>
        </li>
        <li className={styles.navLinkItem}>
          <Link to="/about" className={styles.navLinkText}>
            About
          </Link>
        </li>
        <li className={styles.navLinkItem}>
          <Link to="/blog" className={styles.navLinkText}>
            Blog
          </Link>
        </li>
      </nav>
      <h1 className={styles.heading}>{pageTitle}</h1>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
