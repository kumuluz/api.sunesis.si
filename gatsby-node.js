/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// Externalize webpack runtime to avoid inline scripts for CSP compliance
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      optimization: {
        runtimeChunk: {
          name: 'webpack-runtime',
        },
      },
    });
  }
};
