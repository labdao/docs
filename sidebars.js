// @ts-check

const { readdirSync } = require('fs');
const capitalize = require('lodash/capitalize');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'welcome/welcome',
      label: 'Welcome',
    },
    {
      type: 'doc',
      id: 'getting-started/install-plex',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'Small Molecule Binding',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'small-molecule-binding',
        },
      ],
    },
    {
      type: 'category',
      label: 'Protein Folding',
      collapsed: true,
      items: [
        'protein-folding/overview',
        'protein-folding/tools',
        'protein-folding/run-an-example',
      ]
    },
    {
      type: 'category',
      label: 'About Us',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'about-us',
        },
      ],
    }
  ],
};

module.exports = sidebars;