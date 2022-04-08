/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const { readdirSync } = require('fs');
const capitalize = require('lodash/capitalize');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'LabDAO',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'labdao',
        },
      ],
    },
    {
      type: 'category',
      label: 'Openlab',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'openlab',
        },
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      items: readdirSync('./docs/_projects', { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(projectDir => ({
          type: 'category',
          label: capitalize(projectDir.name),
          items: [
            {
              type: 'autogenerated',
              dirName: `_projects/${projectDir.name}/docs`
            },
          ],
        }),
      ),
    }
  ],
};

module.exports = sidebars;
