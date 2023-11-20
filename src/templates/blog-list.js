import React, { useEffect } from 'react';
import { graphql, Link, navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/siteLayout';
import useSiteMetadata from '../hooks/SiteMetadata';
import { StaticImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import TimeAgo from 'react-timeago';
import { ImPlay } from "react-icons/im"
import { FaImage } from "react-icons/fa"
import { AiOutlinePicLeft } from "react-icons/ai"

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
            <div className="post-card1" key={node.fields.slug} style={{marginTop:''}}>

<Link className="postlink" to={node.frontmatter.slug}>

{node.frontmatter.featuredImage ? (
    <GatsbyImage
      image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
      alt={node.frontmatter.title + " - Featured image"}
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


<div className="post-content" style={{display:'flex', flexDirection:'column', justifyContent:'start', width:'100%', height:'', position:'relative', background:'', padding:'0', margin:'0 auto 0 auto', textAlign:'center', overFlow:'hidden'}}>

  {node.frontmatter.youtube.youtuber ? (

<div className="spotlight" style={{border:'0px solid green', }}>
<div className="posticons" style={{flexDirection:'column', justifyContent:'center', margin:'0 auto'}}>
<div style={{display:'flex', justifyContent:'space-around', gap:'2vw', color:'fff', }}>
<FaImage className="posticon" style={{margin:'0 auto', width:'60%', height:'30px', fontSize:''}} />
<ImPlay className="posticon" style={{margin:'0 auto', width:'60%', height:'30px', fontSize:''}} />
<AiOutlinePicLeft className="posticon" style={{margin:'0 auto', width:'60%', height:'30px', fontSize:''}} />
</div>
Play Multimedia
</div>
</div>

) : (
""
)}

<div className="panel" style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'10px auto', width:'auto', maxWidth:'80vw', gap:'.4vw', height:'', textAlign:'center', padding:'1vh 2vw', fontSize:'clamp(1rem, 1vw, 1rem)',  background:'rgba(0, 0, 0, 0.7)', borderRadius:'', border:'0px solid red', color:'#aaa' }}>
      <h2 className="title" style={{ }}>
        {node.frontmatter.title}
      </h2>

  </div>

</div>

</Link>
{showDates ? (
            <p style={{position:'', textAlign:'center', border:'0px solid red', fontSize:'70%', minWidth:'100px'}}>
            <TimeAgo date={node.frontmatter.date}/>
          </p>
          ) : (
            ""
          )}
    </div>
          ))}

          

          




<div className="" style={{display:'grid', placeContent:'center', minHeight:'', background: 'rgba(0, 0, 0, 0.7)', width: '', margin: '0 auto', padding: '.2vh 2vw .2vh 2vw', textAlign: 'center', color: '#fff', display: 'flex', justifyContent: 'center', borderRadius: '8px' }}>

{/* {hasMorePosts && (
          <> */}
          
          {currentPage > 1 && (
            <button className="button" onClick={() => navigate(currentPage === 2 ? '/archive' : `/archive/${currentPage - 1}`)}>
              Previous
            </button>
          )}

          
            {Array.from({ length: numPages }, (_, i) => {
              const page = i + 1;
              const path = page === 1 ? '/archive' : `/archive/${page}`;
              return (
                <Link
                  key={`pagination-link-${page}`}
                  to={path}
                  activeClassName="active"
                  style={{ padding: '20px' }}
                >
                  {page}
                </Link>
              );
            })}

{currentPage < numPages && (
            <button className="button" onClick={() => navigate(`/archive/${currentPage + 1}`)} disabled={currentPage === numPages}>
              Next
            </button>
          )}
{/* </>
)} */}


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
