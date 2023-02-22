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
      type: 'category',
      label: 'Affinity Prediction',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'affinity-prediction',
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Tutorials',
    //   collapsed: true,
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'tutorials',
    //     },
    //   ],
    // },
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