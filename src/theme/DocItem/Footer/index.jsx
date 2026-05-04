import React from 'react';
import OriginalFooter from '@theme-original/DocItem/Footer';
import Giscus from '@giscus/react';
import { useLocation } from '@docusaurus/router';

// Injected only on training pages — does not affect any other docs section.
export default function DocItemFooterWrapper(props) {
  const { pathname } = useLocation();
  const isTrainingPage = pathname.includes('/training/');

  return (
    <>
      <OriginalFooter {...props} />
      {isTrainingPage && (
        <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--ifm-toc-border-color)', paddingTop: '1.5rem' }}>
          <h3>💬 Ask a Question</h3>
          <p>
            Sign in with your GitHub account to ask questions about this training content.
            An AI assistant (powered by GitHub Models) will reply within a few minutes — but
            only if your question is relevant to the content on this page.{' '}
            <em>Answers are AI-generated and may be imperfect; use your own judgement.</em>
          </p>
          <Giscus
            repo="imranypatel/xp-org1"
            repoId="R_kgDOI2qNng"
            category="Training Q&A"
            categoryId="REPLACE_WITH_CATEGORY_ID"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
          />
        </div>
      )}
    </>
  );
}
