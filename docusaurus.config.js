const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Docusaurus',
  tagline: 'A Docusaurus starter from WebDevStudios',
  url: 'https://webdevstudios.github.io',
  baseUrl: '/docusaurus-starter/',
  organizationName: 'webdevstudios',
  projectName: 'docusaurus-starter',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Docusaurus',
      logo: {
        alt: 'Docusaurus Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs'
        },
        {
          href: 'https://github.com/WebDevStudios/docusaurus-starter',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'View Docs',
              to: '/docs/intro'
            },
            {
              label: 'Markdown Page',
              to: '/markdown-page'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/webdevstudios'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/webdevstudios'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'WebDevStudios',
              href: 'https://webdevstudios.com/'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WebDevStudios. Built with Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/WebDevStudios/docusaurus-starter/blob/main/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
