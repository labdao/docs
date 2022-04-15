// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LabDAO Documentation',
  tagline: '',
  url: 'https://docs.labdao.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'labdao', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => {
            const pathArr = docPath.split('/');
            let repo = 'docs';
            let pathSliceIndex = 0;
            if (pathArr.length > 1 && pathArr[0] === '_projects') {
              repo = pathArr[1];
              pathSliceIndex = 3;
            }
            return `https://github.com/labdao/${repo}/edit/main/docs/${pathArr.slice(pathSliceIndex).join('/')}`
          },
          routeBasePath: '/',
          exclude: [
            'projects/*/*.{md,mdx}',
            '**/_*.{md,mdx}',
          ],
          include: [
            '_projects/*/docs/**/*.{md,mdx}',
            '*/**/*.{md,mdx}',
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LabDAO',
        logo: {
          alt: 'LabDAO Logo',
          src: 'img/labdao-icon.png',
        },
        items: [
          {
            href: 'https://github.com/labdao/docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'Discord',
            href: 'https://discordapp.com/invite/labdao',
            position: 'right',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/lab_dao',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} LabDAO.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
