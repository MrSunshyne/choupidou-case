import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/choupidou-case/',
  title: 'chOUpiD0u case',
  description:
    'This is a project that explains *what*, *how* and *where* of the cHouPidoU case.',
  themeConfig: {
    sidebar: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        collapsed: false,
        items: [{ text: 'Getting Started', link: '/guide/getting-started' }]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MrSunshyne/choupidou-case' }
    ],
    editLink: {
      pattern:
        'https://github.com/MrSunshyne/choupidou-case/edit/master/docs/:path'
    },
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2018-present'
    }
  }
})
