import React, { useState } from "react";
// import useSiteMetadata from "../hooks/SiteMetadata"
// import { StaticImage } from "gatsby-plugin-image"
// import {Link} from "gatsby"
import styled from "styled-components"
import Layout from "../components/siteLayout"
import { Helmet } from "react-helmet"
// import Map from "../components/contact-map"
// import ChatGPT from "../components/chatgpt"

const CustomBox = styled.div`


`

function Test() {
  const [loggedIn] = useState(false);
  
  


  return (

    <CustomBox>
<Layout>
<Helmet>
        <body id="body" className="test" />
      </Helmet>
   
<div className="scroll-container" style={{display:'grid', justifyContent:'center', maxWidth:'80vw', height:'60vh', margin:'140px auto 0 auto'}}>


{loggedIn ? (
  <div style={{position:'relative', left:'', top:'222px', cursor:'pointer'}}>LOGGED IN</div>
) : (
  <div style={{position:'relative', left:'', top:'222px', cursor:'pointer'}}>LOGGED OUT</div>
  )}


{/* <ChatGPT /> */}

</div>





</Layout>



      </CustomBox>
  );
}

export default Test;


