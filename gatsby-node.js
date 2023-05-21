const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve("src/templates/blogTemplate.jsx");
  const quizTemplate = path.resolve("src/templates/quizTemplate.jsx");
  const moduleTemplate = path.resolve("src/templates/moduleTemplate.jsx");
  const tagTemplate = path.resolve("src/templates/tagTemplate.js");

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
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
        sort: { order: DESC }
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
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  result.data.quizzesRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: quizTemplate,
      context: {}, // additional data can be passed via context
    });
  });

  result.data.modulesRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/curriculum/${node.frontmatter.curriculum}/${node.frontmatter.slug}`,
      component: moduleTemplate,
      context: {
        curriculum: node.frontmatter.curriculum,
        slug: node.frontmatter.slug,
      },
    });
  });

  result.data.postsRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });

  result.data.tagsGroup.group.forEach(({ fieldValue }) => {
    createPage({
      path: `/tags/${fieldValue}/`,
      component: tagTemplate,
      context: {
        tag: fieldValue,
      },
    });
  });
};
