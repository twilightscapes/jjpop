import React from "react";
// import useSiteMetadata from "../hooks/SiteMetadata"
// import { StaticImage } from "gatsby-plugin-image"
// import {Link} from "gatsby"
import styled from "styled-components"
import Layout from "../components/siteLayout"
import { Helmet } from "react-helmet"
import FavoriteFeeds from "../components/FavoriteFeeds";


const CustomBox = styled.div`


`

function Favorites() {

  
  


  return (

    <CustomBox>
<Layout>
<Helmet>
        <body id="body" className="social" />
      </Helmet>



<FavoriteFeeds />







</Layout>



      </CustomBox>
  );
}

export default Favorites;


