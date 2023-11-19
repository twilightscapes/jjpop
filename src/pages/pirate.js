import React, { useState } from "react";
import useSiteMetadata from "../hooks/SiteMetadata"
// import { StaticImage } from "gatsby-plugin-image"
// import {Link} from "gatsby"
import styled from "styled-components"
import Layout from "../components/siteLayout"
import { Helmet } from "react-helmet"
// import useNetlifyIdentity from '../components/useNetlifyIdentity';
const CustomBox = styled.div`


`

function Pirate() {
  const { showNav } = useSiteMetadata()
  // const [loggedIn] = useState(false);
  


  return (

    <CustomBox>
<Layout>
<Helmet>

  
        <body id="body" className="social scroll" />
      </Helmet>

      {showNav ? (
        <div className="spacer" style={{ height: "70px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}


{/* {loggedIn ? (
  <div style={{position:'relative', left:'', top:'222px', cursor:'pointer'}}>LOGGED IN</div>
) : (
  <div style={{position:'relative', left:'', top:'222px', cursor:'pointer'}}>LOGGED OUT</div>
  )} */}


<div className="scroll-container1" style={{display:'flex', justifyContent:'start', maxWidth:'', height:'calc(100vh - 70px)', margin:'0 auto 0 auto', position:'relative', left:'0', right:'0', top:'0'}}>
<iframe title="Pirate Frame" id="youtube2" className="blog-video1" width="100%" height="400" src="/admin/" frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'calc(100vh - 70px)', minHeight:'', border:'0px solid yellow', borderRadius:'0', padding:'0 0 0 0' }} />
</div>





</Layout>



      </CustomBox>
  );
}

export default Pirate;


