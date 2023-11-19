
import * as React from "react"
import styled from "styled-components"
// import { Link } from 'gatsby'
import { CgInfo, CgRatio  } from "react-icons/cg"
// import { FaLock } from 'react-icons/fa';
// import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'

import { RiSecurePaymentLine } from "react-icons/ri"
import { HiOutlineScale } from "react-icons/hi"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
const CustomBox = styled.div`

// .infomenu11{

//    border-radius:12px;
//    filter: drop-shadow(0px 0px 10px rgba(155,155,155,.5)); 
//    background:rgba(0,0,0,0.08) !important;
// }

`

const NFTDetails = () => (

<CustomBox style={{}}>



<Tabs className="infomenu" style={{minHeight:'20vh', width:'100%', maxWidth:'', overflow:'hidden', marginTop:'0', color:'var(--theme-ui-colors-text)'}}>

{/* <h2 style={{fontSize:'240%', textAlign:'center', margin:'0',  background: 'var(--theme-ui-colors-panelBG)', padding:'.5rem', borderRadius:'12px 12px 0 0'}}>Info Center </h2> */}

    <TabList style={{width:'100%', minWidth:'400px', background: 'var(--theme-ui-colors-cardBg)', padding:'10px 0', border:'0', borderRadius:'8px', display:'flex', justifyContent:'space-around', alignItems:'center'}}>

    <Tab></Tab>
    <Tab><div className="iconmenu"><RiSecurePaymentLine/><span>Secure</span></div></Tab>
    <Tab><div className="iconmenu"><CgRatio /><span>FAQ</span></div></Tab>
    
    <Tab><div className="iconmenu"><HiOutlineScale/><span>Standards</span></div></Tab>
      {/* <Tab><div className="iconmenu"><FiCamera /><span>Tech</span></div></Tab> */}
      <Tab><div className="iconmenu"><CgInfo /><span>Free Services</span></div></Tab>
      
    </TabList>
 

    <TabPanel style={{width:'100%', background: 'var(--theme-ui-colors-panelBG)', padding:'2rem', borderRadius:'12px'}}>
      {/* <div style={{display:'block', width:'100%', padding:'0 25%'}}>Secure Fo Sure</div> */}
    </TabPanel>



    <TabPanel style={{width:'100%', background: 'var(--theme-ui-colors-panelBG)', padding:'2rem', borderRadius:'12px'}}>
            <strong style={{fontSize:'1.5rem'}}>The PIRATE platform is virtually hack-proof</strong><br /><br />
            <p>Because PIRATE sites are built using a new method of distributed cloud-based hosting of static text and graphic files there is no server to be hacked. PIRATE sites are pre-rendered web applications that build the site contents ahead of time and then served as basic media files and assembled in the site visitors browser.
            <br />
            <br />
             So there are no normal vulnerabilities in running a web server to worry about. There isn't anything for hackers to hack. <br />
            <br />
            
            </p>

    </TabPanel>

    <TabPanel style={{width:'100%', background: 'var(--theme-ui-colors-panelBG)', padding:'2rem', borderRadius:'12px'}}>
            <strong style={{fontSize:'1.5rem'}}>FAQ</strong><br /><br />

            <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>So, what do I get?</p>
            <p style={{}}>Upon completion of your signup, you will receive access to your new website. It will be hosted with Netlify.com and thus will have an address like mynewsite.netlify.app <br />You can point any domain names if you wish or purchase a new one to assign it.</p>

            <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>What CAN I do with these websites?</p>
            <p style={{}}>Almost anything that you want. Use it for your main website to show off your art or your business, you name it! You can also use it only for the blog features by assigning it to a sub domain like blog.existingwebsite.com</p>

            <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>What CAN’T I do with these websites?</p>
            <p style={{}}>Basically, don’t be a Dick or a Karen.
            <br />
            Oh, and don't use it for things like hate speech or starting a terrorist group. Things like that. You can read more about the terms of use on our hosting partners website Netlify.com/terms
            </p>

            <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>Do I get the website right away?</p>
            <p style={{}}>Yes, upon completion of signup and once your account has been created you will receive an email with the details of logging into your new website.</p>

            <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>What if I lose the email, or I forget my details?</p>
            <p style={{}}>Once your account is setup with Netlify, your account information no longer passes through us. You can retrieve any of your account details by contacting Netlify.com</p>

            

            <p style={{fontWeight:'bold', marginBottom:'0', fontSize:'130%'}}>Do I own this website and site copyright or can I claim it as mine?</p>
            <p style={{}}>Yes, you own all of the content that you display on your website and you own the accounts used for the site if there are any (for instance: Netlify account, CodeBox account, Google Analytics account, Shopify account, etc. )
            <br /><br />
             </p>

            

            

            {/* <p style={{fontWeight:'bold'}}></p>
            <p style={{}}></p> */}




    </TabPanel>


    <TabPanel style={{width:'100%', background: 'var(--theme-ui-colors-panelBG)', padding:'2rem', borderRadius:'12px'}}>
    <strong style={{fontSize:'1.5rem'}}>Built Right In All The Right Spots</strong><br /><br />


    <strong style={{fontSize:'1.3rem'}}>The PIRATE Platform was built for the specific needs of photographers and other creative artists because it was built by one.</strong>
<ol style={{margin:'1rem 3rem'}}>
<li style={{}}>A complete system including video blog with unlimited posts, and customizable home page, about and contact pages with integrated contact form.</li>
<br />
<li style={{}}>Built right in the right places. The site is built from the ground up to utelize modern technologies and yet do so in the correct way and one that Google likes. </li>
<br />
<li style={{}}>Top Scores out of the box - Accessibility, SEO, Best Practices, oh.. and its a full-blown Web App too!</li>
<br />
<li style={{}}>Automated backups with intant rollbacks to any version. Site is automatically load-balanced and served from a Global Edge Network so your site is lightning fast no matter where your visitors come from.</li>
<br />
<li style={{}}>Want just the stats? ok:<br />
100GB/Month Bandwidth<br />
100 Site Form submission per Month<br />
Custom Domain names available
</li>
<br />
<li style={{}}>Need more? The PIRATE Platform also has complete E-Commerce integration with Shopify. Not only will you be able to sell your products right from your blog pages, but we utelize Shopify's Developer API which means it only costs $9 a month to run a full featured store. This saves you almost $20 off their normal base $28 monthly fee.</li>

<li style={{}}>Seo? Social? It's in the bag. Our entire content management system(CMS) behind out plaltform is designed to make producing top-notch SEO-minded content that ranks incredibly well in Google page rankings. Also, every page and every post has custom graphics for default social image previews and custom page titles and descriptions on social media sites. Our sites kick butt. Don't believe us? Check out how we do with <a href="https://pagespeed.google.com" target="_blank" rel="noreferrer" nofollow>Google Page Speed</a>.</li> 
</ol>



<blockquote className="frontquote" style={{width:'70%', margin:'2rem auto'}}>
<p>Beyond just the best industry-leading performance and visibility, each PIRATE Platform has tons of great built-in features such as image zooming, tab panels, custom color options for both light and dark themes. The sites are also user installable PWA (Progressive Web Apps) which means your site can be installed on any device without any need for expensive and complex App Stores.  </p>

<div style={{textAlign:'right', marginRight:'20%', marginTop:'20px'}}> – 
</div></blockquote>


            <p style={{textAlign:'center', fontSize:'130%', margin:'2rem 0',}}>
              {/* <Link to="/legal/" style={{color:'inherit'}}>View License Agreement</Link> */}
            
   
           <br />

            </p>



           
    </TabPanel>




    {/* <TabPanel style={{padding:'0 1.5rem', width:'100%'}}>
          <strong>Technology</strong><br /><br />
          <p>
          Twilightscapes were shot using: <br /><br />
          Canon 5D series<br /><br />
          Sony A7S series<br /><br />
          Sony A7R series <br /><br />
          </p>
    </TabPanel> */}


<TabPanel style={{width:'100%', background: 'rgba(0,0,0,0.75)', padding:'2rem', borderRadius:'12px'}}>
           <strong style={{fontSize:'1.5rem'}}>PIRATE uses metered web services wherever possible</strong><br /><br />
           <p>
           PIRATE is built using distributed web services and utelize these metered services for delivery<br /> <br />
           Because metered use of a small portion of a specific transaction is very small, they incure very little or no costs in actual usage.<br /> <br />
           Of course, if your site becomes very active or gets swamped with traffic, the metered costs will kick in and you will be billed according to the providers use accounting.<br /> <br />

           PIRATE takes advantage of free-tier user packages available from a variety of Providers and you will need to open/have your own accounts here: 
           <br /><br />
           <span style={{fontSize:'1.4rem'}}>
            - <a target="_blank" rel="noreferrer" style={{textDecoration:'underline'}} href="https://netlify.com/">Netlify.com</a> for web hosting <br />(we set this up for you and transfer ownership to you)<br />
            - <a target="_blank" rel="noreferrer" style={{textDecoration:'underline'}} href="https://shopify.com/">Shopify.com</a> for e-commerce and digital products <br />(only needed for E-commerce package users)<br />
            - <a target="_blank" rel="noreferrer" style={{textDecoration:'underline'}} href="https://codebox.io/">CodeBox.io</a> for web comments <br />(Only needed if you wish to have visitor comments on your posts)<br />
            - <a target="_blank" rel="noreferrer" style={{textDecoration:'underline'}} href="https://google.com/">Google.com</a> for Analytics <br />(Only needed if you want to use Google Analytics)
</span>
           </p>
           
    </TabPanel>



   

  </Tabs>


</CustomBox>
  
)

export default NFTDetails