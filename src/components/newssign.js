
import * as React from "react"
import { Link } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

// import Layout from "./layout"
// import Seo from "./seo"
import styled from "styled-components";
const CustomBox = styled.div`


.newsletter{position:relative;}

input::placeholder {
  color: #fff !important;
  filter: drop-shadow(0px 0px 6px var(--primary-color));
}







    @media (max-width: 58em) {


      .signbox input{margin-bottom:10px; margin-right:20px;}

    }


}

`


const NewsletterPage = () => (


<CustomBox style={{}}> 


<form  style={{width:'100%', margin:'0 auto 0 auto', display:'flex', flexDirection:'column', justifyContent:'center', background: 'rgba(0,0,0,0.50)',
  backdropFilter: 'blur(4px)', border:'1px solid #000', borderRadius:'12px', textAlign:'center', alignSelf:'center', overflow:'hidden', color:'#fff'}}
          className="contact-form"
          action="/signedup/"
          name="ts-news"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="news" />



            
              {/* <div className="txtshadow" style={{fontSize:'clamp(1.4rem, 1.5vw, 1.5rem)', textAlign:'center', marginTop:'10px'}}><strong>The Fleet Launches Soon!</strong></div>
              <br /> */}
              <span className="txtshadow" style={{fontSize:'95%'}}>Join wait list - enter your email: </span>

             <div className="signbox" style={{display:'flex', flexDirection:'column',gap:'10px'}}>
             
             

               <label style={{color:'#fff'}} htmlFor="email">
                 <input type="email" id="email" required={true}
                      placeholder="your@email.com"
                      autocomplete="email"
                      style={{}}/></label>
                      
            


  

            

            <button
              className="button"
              
              type="submit"
              style={{marginTop:'-8px', fontSize:'clamp(1rem, 1.5vw, 1.5rem)', whiteSpace:'nowrap', color:'#22e3f1', border:'1px solid var(--theme-ui-colors-siteColor)'}}
            >
              Reserve Your Galleon&nbsp;{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>


            </div>


            <div style={{padding: '0px 3%', margin:'5px 0 10px 0', textAlign: 'center', color:'#fff', fontSize:'70%'}}>
            <Link state={{modal: true}} to="/privacy/" className="" style={{textAlign: 'center', padding: '15px',  textDecoration: 'underline', border:'0px solid yellow'}}>Privacy Policy (NO SPAM!)</Link>
           
            </div>
</form>


        
        
</CustomBox>
  
)

  export default NewsletterPage