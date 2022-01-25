export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f04e1acc9fcd00a61e7d9c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xabed9kz',
                  apiId: '59e85cce-3172-44e3-9353-175d7b7f35d5'
                },
                {
                  buildHookId: '61f04e1a998e7173a342a390',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-o8vb5joj',
                  apiId: '15e999e2-564d-4047-aa50-94fb80b38edb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nanobric/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-o8vb5joj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
