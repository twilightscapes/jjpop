import React, { useState } from "react"
import { graphql, Link, navigate } from "gatsby"
import useSiteMetadata from "../hooks/SiteMetadata"
// import { GatsbyImage } from "gatsby-plugin-image"
// import { StaticImage } from "gatsby-plugin-image"
import { AiFillDownSquare } from "react-icons/ai"
import Layout from "../components/siteLayout"
import { Helmet } from "react-helmet"

const CategoryIndex = ({ data, pageContext }) => {
  const { category } = pageContext
  const categories = data.allMarkdownRemark.group.map((group) => group.fieldValue)
  const { postcount } = useSiteMetadata()
  const { showNav } = useSiteMetadata()
  // const { showDates } = useSiteMetadata()

  const [visibleItems, setVisibleItems] = useState(postcount);

  const showMoreItems = () => {
    setVisibleItems(visibleItems + postcount);
  };


  return (

    
    <Layout>
      <Helmet>
        <body className="category utilitypage" />
      </Helmet>
      {showNav ? (
        <div className="spacer" style={{ height: "70px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}


<div className="selectArrow" style={{position:'fixed', top:'', left:'1%', right:'1%',  margin:'-55px auto 0 auto', zIndex:'3', display:'grid', placeSelf:'center',  padding:'',}}>
        {/* <h1 style={{ textAlign: "center" }}>{category}</h1> */}
        <select
  className="cattags"
  style={{}}
  onChange={(e) => {
    const selectedCategory = e.target.value;
    navigate(`/category/${selectedCategory}`);
  }}
  value={category}
>
  <option value="">Categories:</option>
  {categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</select>
<div style={{position:'absolute', right:'10px', top:'8px', height:'100%', color:'#fff', zIndex:'-1', fontSize:'30px'}}><AiFillDownSquare /></div>
 </div>    



 <div className="contentpanel grid-container" style={{ marginTop: "" }}>
          <div className="sliderSpacer" style={{ height: "", paddingTop: "", display: "" }}></div>

   
          {categories.slice(0, visibleItems).map(category => (
          <Link style={{display:'block', maxHeight:'', width:'', height:'', maxWidth:'', overFlow:'hidden', padding:'', fontSize:'clamp(3rem, 3.4vw, 3.2rem)', border:'1px solid', color:'#fff', textShadow:'2px 2px 0 #222', borderRadius:'8px', opacity:'.8'}} to={`/category/${category}`}>
            <div className="post-card12 font" key={category} style={{border:'0px solid red', display:'grid', width:'100%', maxWidth:'', height:'90%', minHeight:'350px', placeContent:'center', textTransform:'capitalize', background:'rgba(0, 0, 0, 0.5)', border:'1px solid #999', borderRadius:'8px' }}>

            {category}

          </div></Link>
        ))}
        {visibleItems < categories.length && (
  <button className="post-card1" style={{ justifyContent: "center", alignItems: "center" }} onClick={showMoreItems}>
    Show more
  </button>
)}
      </div>
  
  
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
      }
    }
  }
`;

export default CategoryIndex;
