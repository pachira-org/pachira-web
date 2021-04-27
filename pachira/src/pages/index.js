import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary  homeimage', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title titletext">{siteConfig.title}</h1>
        <p className="hero__subtitle subtitletext">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--info button--secondary button--lg"
            to="/docs/intro">
            Read the Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Next Generation Mining Protocol">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
