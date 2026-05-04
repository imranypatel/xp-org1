// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    // Landing page
    {
      type: 'doc',
      id: 'intro',
      label: '🏠 Home',
    },

    // Standards — the governance foundation
    {
      type: 'category',
      label: '📐 Standards',
      collapsed: false,
      link: { type: 'generated-index', title: 'Governance Standards' },
      items: [
        'standards/systems-thinking',
        'standards/versioning',
        'standards/branching',
        'standards/issue-workflow',
        'standards/domain-labels',
        'standards/agent-orchestration',
      ],
    },

    // Models — ST causal loop diagrams and SFDs
    {
      type: 'category',
      label: '🔬 Models',
      collapsed: false,
      items: ['models/README'],
    },

    // Plans — versioned implementation plans per issue
    {
      type: 'category',
      label: '📋 Plans',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Issue 1: Governance Workflow',
          items: ['plans/issue-1/governance-workflow-v0.1.1'],
        },
        {
          type: 'category',
          label: 'Issue 3: Systems Thinking Integration',
          items: ['plans/issue-3/systems-thinking-integration-v0.1.1'],
        },
        {
          type: 'category',
          label: 'Issue 5: Documentation Site',
          items: ['plans/issue-5/documentation-site-v0.1.1'],
        },
        {
          type: 'category',
          label: 'Issue 7: Plan Verbatim Standard',
          items: ['plans/issue-7/plan-verbatim-standard-v0.1.0'],
        },
      ],
    },
  ],
};

module.exports = sidebars;
