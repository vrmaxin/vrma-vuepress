// .vuepress/config.js
module.exports = {
  title: 'Vrma Xin',
  description: '这是一个属于我的一个空间',
  themeConfig: {
    // navbar: false,
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '计算机',
        link: '/guide/'
      },
      {
        text: '阿卡贝拉',
        link: '/guide/'
      },
      {
        text: 'Github',
        link: 'https://github.com/vrmaxin'
      },
      {
        text: '音视频',
        items: [
          { text: 'Adobe Audition', link: '/' },
          { text: 'Adobe Premiere', link: '/' }
        ]
      },
      // {
      //   text: '音视频',
      //   items: [{
      //       text: 'Adobe Audition',
      //       items: [{
      //           text: 'Home',
      //           link: '/'
      //         },
      //         {
      //           text: 'Guide',
      //           link: '/guide/'
      //         }
      //       ]
      //     },
      //     {
      //       text: 'Adobe Premiere',
      //       items: [{
      //           text: 'Home',
      //           link: '/'
      //         },
      //         {
      //           text: 'Guide',
      //           link: '/guide/'
      //         }
      //       ]
      //     }
      //   ]
      // }
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