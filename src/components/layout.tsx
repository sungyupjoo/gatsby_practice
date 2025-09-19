import React from 'react';
import { Link } from 'gatsby';
import * as styles from './layout.module.css';

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.container}>
      <nav>
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
      </nav>
      <h1 className={styles.heading}>{pageTitle}</h1>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
