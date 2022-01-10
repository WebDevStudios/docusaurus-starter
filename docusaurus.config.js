const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Client Website Documentation',
  tagline: 'Documentation for your brand new website from WebDevStudios',
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
      logo: {
        alt: 'WebDevStudios Logo',
        src: 'img/wds-logo-60x60.webp'
      },
      items: [
        {
          href: '/',
          label: 'Home',
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Documentation'
        },
        {
          href: 'https://github.com/WebDevStudios/docusaurus-starter',
          label: 'Project GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} - WD3, LLC`
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
