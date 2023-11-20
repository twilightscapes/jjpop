import React, { useEffect } from 'react';
import { graphql, Link, navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/siteLayout';
import useSiteMetadata from '../hooks/SiteMetadata';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import TimeAgo from 'react-timeago';

const BlogList = ({ data, pageContext }) => {
  const { showNav } = useSiteMetadata();
  const { showDates } = useSiteMetadata();
  const { postcount } = useSiteMetadata();

  const posts = data.allMarkdownRemark.edges;
  const { numPages, currentPage } = pageContext;
  const totalCount = data.allMarkdownRemark.totalCount;
  const hasMorePosts = currentPage < numPages;

  useEffect(() => {
    // Add any additional initialization logic if needed
  }, []);

  return (
    <Layout>
      <Helmet>
        <body className="archivepage utilitypage" />
      </Helmet>

      {showNav ? (
        <div className="spacer" style={{ height: '70px', border: '0px solid yellow' }}></div>
      ) : (
        ''
      )}

      <div className="scroll-container" style={{ maxHeight: '100vh', padding: '4vh 0 0 0' }}>
        <div className="contentpanel grid-container" style={{}}>

          <div className="sliderSpacer" style={{ height: '', paddingTop: '', display: '' }}></div>

          {posts.slice(0, currentPage * postcount).map(({ node }, index) => (
            <div className="post-card1" key={node.fields.slug} style={{ marginTop: '' }}>
              <Link className="postlink" to={node.frontmatter.slug}>
                {node.frontmatter.featuredImage ? (
                  <GatsbyImage
                    image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                    alt={node.frontmatter.title + ' - Featured image'}
                    className="featured-image1"
                    placeholder="blurred"
                    loading="eager"
                    style={{ position: 'relative', zIndex: '1', maxHeight: '', margin: '0 auto' }}
                  />
                ) : (
                  <StaticImage
                    className="featured-image1"
                    src="../../static/assets/default-og-image.webp"
                    alt="Default Image"
                    style={{ position: 'relative', zIndex: '' }}
                  />
                )}
                {/* ... (existing code) */}
              </Link>
              {showDates ? (
                <p style={{ position: '', textAlign: 'center', border: '0px solid red', fontSize: '70%', minWidth: '100px' }}>
                  <TimeAgo date={node.frontmatter.date} />
                </p>
              ) : (
                ''
              )}
            </div>
          ))}
<div style={{display:'flex', justifyContent:'center'}}>


{currentPage > 1 && (
  <button className="button" onClick={() => navigate(currentPage === 2 ? '/archive' : `/archive/${currentPage - 1}`)}>
    Previous
  </button>
)}

{hasMorePosts && (
            <button className="button" onClick={() => navigate(`/archive/${currentPage + 1}`)}>
              Show more
            </button>
          )}

</div>



        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      skip: $skip
      limit: $limit
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            youtube {
              youtuber
            }
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogList;
