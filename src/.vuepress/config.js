const { description } = require('../../package.json')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Seatplus',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'seatplus/seatplus.github.io',
    editLinks: true,
    docsDir: '',
    editLinkText: 'Help us improve this page!',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Features',
        link: '/feature/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/seatplus/seatplus'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Seatplus',
          collapsable: false,
          children: [
              '',
          ]
        },
        {
          title: 'Installation',
          collapsable: false,
          children: [
            'requirements',
              'installation',
              'configure'
          ]
        },
        {
          title: 'Administration',
          collapsable: false,
          children: [
            'admin',
          ]
        }
      ],
      '/feature/': [
        {
          title: 'Features',
          collapsable: false,
          children: [
            '',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/active-header-links'
  ]
}
