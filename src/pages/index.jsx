import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHero() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>xp-org1</h1>
        <p className={styles.heroSubtitle}>
          Agentic Organizer based on GitHub Platform
        </p>
        <p className={styles.heroDescription}>
          Issue-driven · AI-agent-orchestrated · Systems Thinking foundation ·
          21+ business and technical domains
        </p>
        <div className={styles.heroCta}>
          <Link className="button button--primary button--lg" to="/docs/standards/systems-thinking">
            Start with Systems Thinking →
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            View Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    emoji: '🔄',
    title: 'Systems Thinking Foundation',
    description:
      "Every domain \u2014 HR, Finance, Infrastructure, Marketing \u2014 is analyzed through a Systems Thinking lens first. Stocks, flows, feedback loops, delays, archetypes, and Meadows\u2019 leverage points guide all interventions.",
  },
  {
    emoji: '📌',
    title: 'Issue-Driven Progress',
    description:
      'Every change starts with a GitHub Issue. Every merge flows through a Pull Request. No direct commits to main. Plans, decisions, and context live in versioned docs alongside the code.',
  },
  {
    emoji: '🤖',
    title: 'Agent-Orchestrated',
    description:
      'Anvil acts as the principal advisor agent, orchestrating domain specialists. Governance standards define how agents assess, route, and resolve issues consistently across all 21+ domains.',
  },
  {
    emoji: '🏷️',
    title: '43-Label Taxonomy',
    description:
      'A structured label system — domain/, type/, status/, and st/ categories — ensures every issue is precisely classified and routable before work begins.',
  },
  {
    emoji: '📐',
    title: 'Semantic Versioning',
    description:
      'Every release is tagged vMAJOR.MINOR.PATCH. Every document carries a version. Versioned snapshots of this documentation site match each release tag.',
  },
  {
    emoji: '📋',
    title: 'Versioned Plans',
    description:
      'Each issue gets a versioned plan in docs/plans/issue-N/. Plans include ST analysis, design decisions, and scope — forming an auditable trail of intent alongside the code.',
  },
];

function FeatureGrid() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {features.map(({ emoji, title, description }) => (
            <div key={title} className={styles.featureCard}>
              <div className={styles.featureEmoji}>{emoji}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHero />
      <main>
        <FeatureGrid />
      </main>
    </Layout>
  );
}
