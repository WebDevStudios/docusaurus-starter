import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React from 'react'
import HomepageFeatures from '../components/HomepageFeatures'
import styles from './index.module.css'

/**
 * Render the HomepageHeader component.
 *
 * @author WebDevStudios
 * @return {Element} The HomepageHeader component.
 */
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Tutorial - 5min
          </Link>
        </div>
      </div>
    </header>
  )
}

/**
 * Render the Homepage.
 *
 * @author WebDevStudios
 * @return {Element} The Home component.
 */
export default function Home() {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
