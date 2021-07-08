---
sidebar_position: 1
---

# Create a Page

Add **Markdown or React** files to `src/pages` to create a **pages**.

## Routes

The file name creates a route:

```text
src/pages/index.js -> docusaurus.io/
src/pages/foo.md -> docusaurus.io/foo
src/pages/foo/bar.js-> docusaurus.io/foo/bar
```

## React-based Page

Create a file at `src/pages/react-page.js`:

```jsx title="src/pages/react-page.js"
import React from 'react'
import Layout from '@theme/Layout'

export default function ReactPage() {
  return (
    <Layout>
      <h1>React page</h1>
      <p>This is a React page</p>
    </Layout>
  )
}
```

This page is now available at `http://docusaurus.io/react-page`.

---

## Markdown-based Page

Create a file at `src/pages/markdown-page.md`:

```mdx title="src/pages/markdown-page.md"
---
title: Markdown page
---

# Markdown page

This is a Markdown page.
```

This page is now available at `http://docusaurus.io/markdown-page`.

Learn more about [Front Matter](/docs/tutorial-basics/markdown-features#front-matter) or see an example [Markdown-based standalone page](/markdown-page).
