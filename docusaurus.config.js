// @ts-check
// Docusaurus v3 configuration for xp-org1

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'xp-org1',
  tagline: 'Agentic Organizer based on GitHub Platform — Systems Thinking · Issue-Driven · Agent-Orchestrated',
  favicon: 'img/favicon.ico',

  url: 'https://imranypatel.github.io',
  baseUrl: '/xp-org1/',

  organizationName: 'imranypatel',
  projectName: 'xp-org1',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Mermaid support for Causal Loop Diagrams
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/imranypatel/xp-org1/edit/main/',

          // Versioning — matches SemVer release tags
          // "next (unreleased)" is hidden: snapshots are created only on MINOR/MAJOR.
          // PATCH releases that touch only src/ (not docs/) do not increment the doc version.
          // See docs/standards/versioning.md — Docusaurus Snapshot Policy.
          lastVersion: 'v0.6.0',
          onlyIncludeVersions: ['v0.6.0', 'v0.5.0', 'v0.4.0', 'v0.3.1', 'v0.3.0', 'v0.2.0', 'v0.1.0'],
          versions: {
            'v0.6.0': {
              label: 'v0.6.0 (latest)',
              path: '/',
              badge: false,
            },
            'v0.5.0': {
              label: 'v0.5.0',
              path: 'v0.5.0',
              badge: true,
            },
            'v0.4.0': {
              label: 'v0.4.0',
              path: 'v0.4.0',
              badge: true,
            },
            'v0.3.1': {
              label: 'v0.3.1',
              path: 'v0.3.1',
              badge: true,
            },
            'v0.3.0': {
              label: 'v0.3.0',
              path: 'v0.3.0',
              badge: true,
            },
            'v0.2.0': {
              label: 'v0.2.0',
              path: 'v0.2.0',
              badge: true,
            },
            'v0.1.0': {
              label: 'v0.1.0',
              path: 'v0.1.0',
              badge: true,
            },
          },
        },

        // Blog disabled — governance is issue-driven, not blog-driven
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'xp-org1',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
            to: '/docs/intro',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/imranypatel/xp-org1',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Standards',
            items: [
              { label: 'Systems Thinking', to: '/docs/standards/systems-thinking' },
              { label: 'Versioning', to: '/docs/standards/versioning' },
              { label: 'Issue Workflow', to: '/docs/standards/issue-workflow' },
              { label: 'Agent Orchestration', to: '/docs/standards/agent-orchestration' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'GitHub Repository', href: 'https://github.com/imranypatel/xp-org1' },
              { label: 'Issues', href: 'https://github.com/imranypatel/xp-org1/issues' },
            ],
          },
        ],
        copyright: `xp-org1 · Built with Docusaurus · v0.3.0`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
      },
    }),
};

module.exports = config;
