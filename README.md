# Docusaurus Starter<!-- omit in toc -->

A Docusaurus starter from WebDevStudios.

[![WebDevStudios. Your Success is Our Mission.](https://webdevstudios.com/wp-content/uploads/2018/04/wds-github-banner.png)](https://webdevstudios.com/contact/)

## Table of Contents <!-- omit in toc -->

- [About](#about)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
- [Configuration](#configuration)
- [Development](#development)
  - [Linting](#linting)
  - [Deployments](#deployments)
- [Content Management](#content-management)
  - [Creating Pages](#creating-pages)
  - [Algolia Integration](#algolia-integration)
- [Contributing and Support](#contributing-and-support)

## About

[Docusaurus](https://docusaurus.io/) will help you ship a beautiful documentation website in no time. It's an [open-source project](https://github.com/facebook/docusaurus) maintained by the engineers at Facebook.

At WebDevStudios we love to write documentation! We also love standards, linting, and have a particular way of writing React. This starter gives our team members a standard way of spinning up documentation-based websites powered by Docusaurus v2.

## Setup

### Prerequisites

- Node 14
- NPM 7

### Install

Close the repo:

```console
git clone git@github.com:WebDevStudios/docusaurus-starter.git
```

Install dependencies:

```console
npm i --legacy-peer-deps
```

Learn more about [installing Docusaurus](https://docusaurus.io/docs/installation).

## Configuration

Please see the `docusaurus.config.js` file in the root of this project. Learn more about [configuring Docusaurus](https://docusaurus.io/docs/configuration).

```js
// the basic shape of docusaurus.config.js
module.exports = {
  title: 'Docusaurus',
  tagline: 'A Docusaurus starter from WebDevStudios',
  url: 'https://webdevstudios.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'webdevstudios',
  projectName: 'docusaurus-starter',
  themeConfig: {
    navbar: {},
    footer: {},
    prism: {}
  },
  presets: [['@docusaurus/preset-classic']]
}
```

## Development

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```console
npm run dev
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

```console
npm run build
```

### Linting

You can also lint and format the codebase:

```console
npm run lint
```

```console
npm run format
```

### Deployments

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

```console
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

## Content Management

### Creating Pages

Please see the [official Docusaurus website](https://docusaurus.io/docs/creating-pages) for more info about creating pages, docs, search, and using markdown.

### Algolia Integration

Docusaurus supports Algolia. Please read the [official docs](https://docusaurus.io/docs/search#using-algolia-docsearch) to learn more.

## Contributing and Support

Your contributions and [support tickets](https://github.com/WebDevStudios/docusaurus-starter/issues) are welcome. Please see our [contributing guidelines](https://github.com/WebDevStudios/docusaurus-starter/blob/main/CONTRIBUTING.md) before submitting a pull request.

This is free software and is released under the terms of the MIT license. See [LICENSE.md](https://github.com/WebDevStudios/docusaurus-starter/blob/main/LICENSE.md) for complete license.
