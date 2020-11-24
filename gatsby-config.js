/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'codeanish.com',
        acl: null
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      } 
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'CodeAnish',
        short_name: 'CodeAnish',
        start_url: '.',
        // background_color: '#3B4252',
        // theme_color: '#3B4252',
        // display: 'standalone',
        icon: 'src/assets/icon.png'
      }
    }
  ],
}
