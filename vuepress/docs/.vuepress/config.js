// .vuepress/config.js
module.exports = {
  themeConfig: {
    // navbar: false,
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
      // {
      //   text: 'Languages',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese' },
      //     { text: 'Japanese', link: '/language/japanese' }
      //   ]
      // },
      {
        text: 'Languages',
        items: [{
            text: 'Group1',
            items: [{
                text: 'Home',
                link: '/'
              },
              {
                text: 'Guide',
                link: '/guide/'
              }
            ]
          },
          {
            text: 'Group2',
            items: [{
                text: 'Home',
                link: '/'
              },
              {
                text: 'Guide',
                link: '/guide/'
              }
            ]
          }
        ]
      }
    ],
    displayAllHeaders: true,
    // sidebar: [
    //   '/',
    //   '/page-a/',
    //   ['/page-b/', 'Explicit link text'],
    //   {
    //     title: 'lalla',
    //     collapsable: true,
    //     children: [
    //       '/',
    //       ['/page-a/', 'pageA']
    //     ]
    //   },
    //   {
    //     title: 'hahah',
    //     collapsable: false,
    //     children: [
    //       '/',
    //       ['/page-a/', 'pageA']
    //     ]
    //   }
    // ]

    sidebar: {
      '/foo/': [
        '', /* /foo/ */
        'one', /* /foo/one.html */
        'two' /* /foo/two.html */
      ],

      '/bar/': [
        '', /* /bar/ */
        'three', /* /bar/three.html */
        'four' /* /bar/four.html */
      ],

      // fallback
      '/': [
        '', /* / */
        'contact', /* /contact.html */
        'about' /* /about.html */
      ]
    }
  }
}