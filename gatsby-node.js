const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blogTemplate.jsx');
  const quizTemplate = path.resolve('src/templates/quizTemplate.jsx');
  const moduleTemplate = path.resolve('src/templates/moduleTemplate.jsx');
  const tagTemplate = path.resolve('src/templates/tagTemplate.jsx');

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 1000
        filter: { frontmatter: { template: { eq: "BlogPost" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
      quizzesRemark: allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { template: { eq: "QuizTemplate" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
      modulesRemark: allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { template: { eq: "ModuleTemplate" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              curriculum
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.quizzesRemark.edges.forEach(({ node }) => {
    const { path } = node.frontmatter;
    createPage({
      path,
      component: quizTemplate,
      context: {
        pagePath: path,
      },
    });
  });

  result.data.modulesRemark.edges.forEach(({ node }) => {
    const path = `/curriculum/${node.frontmatter.curriculum}/${node.frontmatter.slug}`;
    createPage({
      path,
      component: moduleTemplate,
      context: {
        curriculum: node.frontmatter.curriculum,
        slug: node.frontmatter.slug,
        pagePath: path,
      },
    });
  });

  result.data.postsRemark.edges.forEach(({ node }) => {
    const { path } = node.frontmatter;
    createPage({
      path,
      component: blogPostTemplate,
      context: {
        pagePath: path,
      },
    });
  });

  result.data.tagsGroup.group.forEach(({ fieldValue }) => {
    const path = `/tags/${fieldValue}/`;
    createPage({
      path,
      component: tagTemplate,
      context: {
        tag: fieldValue,
      },
    });
  });
};
