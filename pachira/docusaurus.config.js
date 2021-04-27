/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'pachira',
  tagline: 'FPGA Mining Protocol',
  url: 'https://pachira.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pachira-org', // Usually your GitHub org/user name.
  projectName: 'pachira-web', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'pachira',
      logo: {
        alt: 'Pachira Logo',
        src: 'img/money_tree_logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pachira-org',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/pachira',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pachira',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/pachira-org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} pachira :::: Built with Docusaurus`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/pachira-org/pachira-web/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/pachira-org/pachira-blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
