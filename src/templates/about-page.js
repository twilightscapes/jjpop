import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import useSiteMetadata from "../hooks/SiteMetadata"
import Seo from "../components/seo"
import Layout from "../components/siteLayout"
import GoBack from "../components/goBack"
import Footer from "../components/footer"
import Faqs from "../components/equipment-list"
import SignUp from "../components/newssign"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

const AboutPage = () => {
  const { showNav } = useSiteMetadata()
  const data = useStaticQuery(graphql`
    query AboutQuery {
      markdownRemark(frontmatter: { template: { eq: "about-page" } }) {
        html
        excerpt(pruneLength: 140)
        frontmatter {
          title
        }
      }
    }
  `)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Helmet>
        <body id="body" className="utilitypage" />
      </Helmet>
      <Seo title={frontmatter.title} description={excerpt} />

      {showNav ? (
        <div className="spacer" style={{ height: "60px", border: "0px solid yellow" }}></div>
      ) : (
        ""
      )}
      <div className="container panel" style={{ maxWidth: "", margin: "0 auto", paddingTop: "0" }}>
        <div className="mobile">
          <GoBack />
        </div>

        {/* <h1 className="headline">{frontmatter.title}</h1> */}
        

        {/* <article dangerouslySetInnerHTML={{ __html: html }} /> */}

        {/* <section id="SecondaryInfo2" order="7" className="nameblock" style={{margin:'0 auto 10vh auto', padding:'2% 4%',alignContent:'center', display:'grid', textAlign:'left', justifyContent:'center', verticalAlign:'center',
  color:'var(--theme-ui-colors-text)',
  border:'0px solid red', 
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  background:'var(--theme-ui-colors-cardBg)',
  backdropFilter:'blur(8px)',
  // border:'1px solid #333',
  borderRadius:'10px',
  // textShadow:'0 2px 0px #000',
  maxWidth:'95%' ,
  // border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'12px'
  }}>



  <div className="nameblock flexcheek" style={{position:'sticky', top:'0', marginTop: '', width:'100%', padding: '0 2rem 0 2rem', margin:'2vh 0', maxHeight: '', fontSize: 'clamp(1rem, 3.5vw, 3.2rem)', textAlign:'center', textShadow: '0 2px 3px #000', color: '#fff', background: 'rgba(0,0,0,0.50)', backdropFilter: 'blur(12px)', borderRadius: '10px' }}>
    <h2>How It Works</h2>
  </div>




<div className="flexbutt" style={{gap:'10vw'}}>
<div className="flexcheek" style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Set Sail:</h2> <p>At PIRATE, your personal website is your Galleon in the digital sea. Your Galleon does double duty working as both your homepage, resume, and blog, as well as acting as your Helm to another world of Social Media. You're no landlubber, you're a Captain, steering your own course through the Social Media Seas.</p>

<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Chart Your Course:</h2> <p>Your homepage, profile and timeline become your Captain's Log and your personal flag, flying high above the digital waves. Your posts are more than mere messages in a bottle, they're personal tales of your adventures in the vast sea of the internet.</p>

<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Spyglass View:</h2> <p>Every ship you spot and "Plunder" enhances your view of the digital horizon. Your custom timeline transforms your voyage into a grand exploration of the treasures you've chosen to seek out.</p>

<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>High Seas Freedom:</h2> <p>PIRATE is a haven from the corporate armada, from central rule, and from censorship. Every word you scribe and every tale you tell is unequivocally yours. It's about sailing under your own flag, following your own chart, and staking your claim in the digital world.</p>
<h2 style={{fontSize: 'clamp(1rem, 3vw, 2.2rem)'}}>Shipmates Unite:</h2> <p>This platform is about building your crew on your terms. Your content is free from the manipulations of corporate quartermasters, allowing you to forge alliances based on authenticity and shared quests.</p>
</div>

<div className="flexcheek" style={{display:'flex', gap:'2vw', flexDirection:'column', justifyContent:'space-between', fontSize: 'clamp(1rem, 1vw, 2.2rem)', textAlign:'center', padding:'1rem 0'}}> 

<StaticImage src="../../static/assets/action3.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
Control your website and social media together in one app - easily installs onto your device so you have it with you at all times, even if you're offline.
<StaticImage src="../../static/assets/action6.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
Scan your timelines faster and the way you want. Featuring a unique swipe OR scroll interface, your choice.
<StaticImage src="../../static/assets/action5.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
Customize all aspects of your website in the app. Just love purple? Great, you can always be you!
<StaticImage src="../../static/assets/action2.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
You control your timeline (and everything else), not some billionaire appeasing stockholders or their bottomline. 
</div>
</div>


</section> */}




<section id="SecondaryInfo" order="6" className="nameblock" style={{margin:'10vh auto 10vh auto', padding:'1% 4%',alignContent:'center', display:'grid', textAlign:'left', justifyContent:'center', verticalAlign:'center',
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  // background:'rgba(0,0,0,0.50)',
  backdropFilter:'blur(8px)',
  borderRadius:'10px',
  // textShadow:'0 2px 7px #000',
  maxWidth:'95%',

  background:'var(--theme-ui-colors-background)', color:'var(--theme-ui-colors-text)',
   }}>


{/* <p>Ready to set sail on your own social media voyage? Joining the PIRATE Social revolution is as easy as hoisting your flag. Click on the 'Sign Up' button to embark on your journey. You'll be taken through a simple process where you'll establish your own personal galleon - your unique website that serves as your profile in the PIRATE Social fleet.</p>

<p>Upon signing up, you'll gain access to the Netlify CMS and Netlify Identity, the wind in your sails that will allow you to customize your profile, post your own content, and chart your course in the vast digital sea. Remember, your voice and content are your own on PIRATE Social. So, get ready to make some waves, captain!</p> */}

<div className="nameblock flexcheek" style={{position:'sticky', top:'0', marginTop: '', width:'100%', padding: '0 2rem 0 2rem', margin:'2vh 0', maxHeight: '', fontSize: 'clamp(1rem, 3.5vw, 3.2rem)', textAlign:'center', textShadow: '0 2px 3px #000', color: '#fff', background: 'rgba(0,0,0,0.50)', backdropFilter: 'blur(12px)', borderRadius: '10px' }}>
    <h2>No-Quarter</h2>
  </div>
  
  <div className="flexbutt1" style={{gap:'10vw', display:'flex'}}>
<div className="flexcheek" style={{display:'flex', flexDirection:'column', justifyContent:'space-around', width:'100%'}}>
    <p>PIRATE is a revolutionary new social media platform with NO central authority. A decentralized network where each user hosts their own personal website app or "Galleon", which also transforms into their own social media profile.</p>
    
    <p>These website apps, or 'Galleons' as we like to call them, are hosted for free on platforms like Netlify and GitHub, offering a decentralized network powered by the spirit of digital freedom.</p>

  <p>Your voice matters. Every post you make is an entry, a testament to your individuality, and a piece of content that remains unequivocally yours.</p> 
    
    <p>The PIRATE platform encourages active content curation, where 'liking' a website contributes to a custom timeline, offering a personalized journey through the digital world.</p>
      
      
      <p>We proudly hoist our black and white Jolly Roger as a symbol of our commitment to stand against corporate influence, central ownership, and censorship.</p>


      </div>


      <div className="flexcheek" style={{display:'flex', gap:'2vw', flexDirection:'column', justifyContent:'space-around', fontSize: 'clamp(1rem, 1vw, 2.2rem)', textAlign:'center', width:'200px', alignItems:'center'}}> 

<StaticImage src="../../static/assets/anti1.webp" alt="Default Image" style={{height:'auto', maxWidth:'150px', position:'relative', zIndex:'0', top:'0', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

<StaticImage src="../../static/assets/anti2.webp" alt="Default Image" style={{height:'auto', maxWidth:'150px', position:'relative', zIndex:'0', top:'0', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

<StaticImage src="../../static/assets/anti3.webp" alt="Default Image" style={{height:'auto', maxWidth:'150px', position:'relative', zIndex:'0', top:'0', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

<StaticImage src="../../static/assets/anti4.webp" alt="Default Image" style={{height:'auto', maxWidth:'150px', position:'relative', zIndex:'0', top:'0', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

</div>


      </div>
</section>



<section id="SecondaryInfo" order="6" className="nameblock" style={{margin:'10vh auto 10vh auto', padding:'1% 4%',alignContent:'center', display:'flex', textAlign:'left', justifyContent:'center', verticalAlign:'center', }}>


      <div className="container" style={{padding: '0 10%', color:''}}>

{/* <div id="costs" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'0 0 2rem 0', width:'100%'}}>
              
              

              <p style={{fontSize:'150%', textAlign:'center', margin:'2rem 0 0 0'}}><u>LOW</u> Monthly Costs</p>
              
              <div style={{display:'flex', padding:'1rem 10%', margin:'0 2% 0 2%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'1000px', gap:'20px', background:'rgba(0,0,0,0.30)', textShadow:'2px 2px 10px #222', filter:'drop-shadow(0px 0px 10px #ad04a5)', border:'1px solid #000'}}>
              
                <span style={{fontSize:'3rem', color:'white', transform:'rotate()', lineHeight:'100%'}}>Web Apps </span>
              
                <span style={{width:'70%', fontSize:'40px', color:'var(--primary-color)', lineHeight:'100%'}}>
                WITH NO<br /> HIDDEN COSTS
                </span>
              </div>

              <p style={{fontSize:'150%', textAlign:'center', margin:'0 0 0 0'}}>uses metered Cloud Based Services</p>

              </div> */}


<h2 id="costs" className="letter" style={{fontSize:'240%', textAlign:'center'}}>PIRATE Runs Free Of Cost</h2>
<p style={{fontSize:'150%', textAlign:'center'}}>PIRATEs have <u>NO</u> monthly costs.

</p> 



<div className="flexbutt hover" style={{display:'flex', padding:'0', gap:'20px', color:'#fff'}}>


<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-siteColor)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Cloud Hosting</h3>

<div style={{}}>Virtually all sites operate month-to-month for <strong className="highlight">FREE or low cost</strong>. 
  <br />
Pay only when your site uses a LOT of data.<br /> 
 <br />
 <div style={{textDecoration:'underline', textAlign:'center'}}><a href="https://www.netlify.com/pricing/" target="_blank" rel="noreferrer" >View  <strong className="highlight"></strong> Hosting Plan</a></div>
 </div>

</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Analytics</h3>
<p>Complete integration with Google Analytics. Simply paste your account tracking code into the CMS settings. 
  <br />
  <br />Track your website performance for <strong className="highlight">FREE</strong>!</p>
</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-siteColor)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>E-Commerce</h3>
<p>Complete Shopify API integration with Shopify shopping cart built-in.
Get FULL Shopify functionality directly inside your site.
<br />
   <br />Shopify API costs <strong className="highlight">$8.99mo</strong>.</p>
</div>
</div>











<div className="flexbutt hover" style={{display:'flex', marginTop:'20px', padding:'', gap:'20px', color:'#fff'}}>


<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Social Sharing</h3>
<p>Why pay for plugins just to allow for your users to share your content? Social sharing is built-in, along with other great features. <br /><br />All INCLUDED for <strong className="highlight">FREE</strong>.</p>
</div>

<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-siteColor)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>AdFree YouTube</h3>
<p>We use AdFree YouTube to remove ads. This means you have complete control of your videos without any ads.
  
  <br /><br />AdFree YouTube <strong className="highlight">FREE!</strong></p>
</div>

{/* <div className="flexcheek" style={{width:'33%', padding:'2rem', background: 'rgba(0,0,0,0.30)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double #999', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext">NFT Features</h3>
<p>Setup countdown timers for your own NFT Drops!  <br /> Embed your Foundation or OpenSea into your posts. Just copy and paste the share code.</p>
</div> */}
<div className="flexcheek" style={{width:'33%', background: 'rgba(0,0,0,0.60)', padding:'1rem 2rem ', backdropFilter: 'blur(4px)', border:'10px double var(--theme-ui-colors-buttonHoverBg)', borderRadius:'12px', textAlign:'', alignSelf:'', }}>
<h3 className="vartext letter" style={{color:'#fff', fontWeight:'700'}}>Comments</h3>
<p>We use CommentBox.io and with their generous 100 comments a month.
  
  <br /><br /><strong className="highlight" style={{color:''}}>FREE!</strong> Comments without ads</p>
</div>


</div>



      </div>
</section>











<section id="features" className="">


  
  {/* <div style={{position:'relative', display:'grid', margin:'0 auto 3vh auto', placeContent:'center', right:'', height:'100vh', width:'100vw', color:'#fff' }}>

<h2 id="" style={{fontSize:'clamp(1vw, 7.5vw, 9.5vw)', textShadow:'1px 2px 0px #111', position:'relative'}}>PIRATE Galleons</h2>
<h3 style={{fontSize:'clamp(1vw, 4.5vw, 9.5vw)', textShadow:'1px 2px 0px #111', position:'relative', textAlign:'center'}}>(Your website app)</h3>

    <StaticImage style={{height:'auto', width:'100vw', height:'100vh', overflow:'', position:'absolute', margin:'0 auto', zIndex:'-1', objectFit:'cover', border:'0px solid red', background:'transparent',}} src="../../static/assets/shipbg.webp" alt="Lighthouse Scores for VidSocks" width="100%" height="auto" className="rounded" />

</div> */}


<div className="flexbutt featurelisting" style={{display:'flex', padding:'2rem', alignItems:'baseline', position:'relative', gap:'30px', color:'#fff'}}>



  <div className="flexcheek" style={{position:'sticky', top:'0'}} >
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px', textAlign:'left'}}>
        
      <h2
  className="title1 txtshadow-header"
  style={{
   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 0px #222', filter:'drop-shadow(0px 0px 10px var(--theme-ui-colors-siteColor))', border:'1px solid var(--theme-ui-colors-siteColor)' }}>PIRATE includes:</span></h2>
          
        <ul className="featurelist" style={{listStyleType:'none'}}>
        <li>User-installable PWA (Progressive Web Apps) which means your site can be installed on any device without the need for expensive and complex App Stores.</li>
        <li>Hosting on Global Edge Network (the cloud)</li>
        <li>Automated backups with intant rollbacks to any version.</li>
        <li>FREE - 100GB/Mo Bandwidth</li>
<li>FREE - 100 Site Form Submits per Mo</li>
<li>FREE Secured Socket Layer (SSL) Cert (https://)</li>
<li>Customizable with your own domain name</li>
<li>Responsive Design, built with React and Gatsby</li>
<li>Dark / Light Mode (also full support for all web accessibility guidelines)</li>



</ul>
      </div>
    </div>
  </div>






  <div className="flexcheek" style={{position:'sticky', top:'0'}} >
    <div className="frontcontent content-lr">
    
      <div className="content-inside" style={{padding:'8px'}}>
        

        <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 0 #222', filter:'drop-shadow(0px 0px 10px var(--theme-ui-colors-siteColor))', border:'1px solid var(--theme-ui-colors-siteColor)' }}>PIRATE Features:</span></h2>


        <ul className="featurelist" style={{listStyleType:'none'}}>
        
 <li>Custom Homepage with Resume and Skills sections</li>
<li>Edit website settings, Change colors, logos, etc all from within the CMS.</li>

<li>100% SEO Optimized - Google LOVES PIRATE. </li>

<li>Contact Form - an integrated contact form on all pages of the your site, that sends everything right to your email inbox.</li>



<li>Social Media Icons - link to all your sites and allow users to easily share your content</li>

<li>OpenGraph structured data - all of site is structured to be shared with high quality image links on social sites</li>

<li>Twitter Cards meta - Your pages will look great when shared on Twitter</li>

<li>XML Sitemaps - Your entire site is automatically indexed and links provided to search engines.</li>


<li>Your Stuff is SAFE - All stored in native image formats and markdown files that are downloadable at any time</li>




</ul>
      </div>
    </div>
  </div>



  <div className="flexcheek hover">
    <div className="frontcontent">
      <div className="content-inside" style={{padding:'8px'}}>
        {/* <h2 className="vartext txtshadow">PIRATE Features:</h2> */}
        <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'0 0 10px 0',
    padding:'0',
    fontSize:'1.7rem'
  }}
>

<span  className="fire" style={{fontSize:'100%', fontWeight:'bold', textTransform:'', background:'rgba(0,0,0,0.30)', borderRadius:'12px', marginTop:'-40px', position:'absolute', width:'100%', display:'flex', justifyContent:'center', textShadow:'2px 2px 0 #222', filter:'drop-shadow(0px 0px 10px var(--theme-ui-colors-siteColor))', border:'1px solid var(--theme-ui-colors-siteColor)' }}>Pro Features:</span></h2>

        <ul className="featurelist" style={{listStyleType:'none'}}>






<li>Customize all content of included Homepage, About and Contact page. Add / Modify / Delete blog posts.</li>

<li>Edit website settings, Add Google Analytics change colors, settings, logos, etc all from within the CMS.</li>

<li>Hide/Show Comments, Social Sharing, or User-interactivity (youtube video changer) on a post-by-post basis</li>


<li>Control YouTube videos with starting/stopping times, loop, mute, etc..</li>

<li>Custom Ad-Free YouTube Player</li>

<li>Full Privacy Compliance Support (GDPR and CCPA). </li>

<li>PWA Exclusive Content (make some of your content only available to your site's user base - great to boost engagement!)</li>

<li>Drop Timers - Easily create your own Drops. Make posts appear when your NFT drops. Just add the drop date and time</li>


<li>E-Newsletter Form - Build your email newsletter by allowing peole to easily sign up</li>
{/* <li>Auction Timers - Make posts disappear when your auction expires</li> */}

</ul>
      </div>
    </div>
  </div>

  



  
</div>
</section>











<section id="SecondaryInfo2" order="7" className="nameblock" style={{margin:'2vh auto 10vh auto', padding:'2% 4%',alignContent:'center', display:'grid', textAlign:'left', justifyContent:'center', verticalAlign:'center',
   color:'var(--theme-ui-colors-text)',
  // border:'0px solid red', 
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  // background:'#222',
  // backdropFilter:'blur(8px)',
  // border:'1px solid #333',
  borderRadius:'10px',
  // textShadow:'0 2px 7px #000',
  maxWidth:'95%' }}><Faqs /></section>



 


<section id="SecondaryInfo2" order="7" className="nameblock" style={{margin:'0 auto 20vh auto', padding:'2% 4%',alignContent:'center', display:'grid', textAlign:'left', justifyContent:'center', verticalAlign:'center',
  color:'#fff',
  border:'0px solid red', 
  fontSize:'clamp(1rem, 1.8vw, 3.2rem)',
  background:'#222',
  backdropFilter:'blur(8px)',
  // border:'1px solid #333',
  borderRadius:'10px',
  textShadow:'0 2px 7px #000',
  maxWidth:'95%' }}>



  <div className="nameblock" style={{position:'sticky', top:'0', marginTop: '', width:'100%', padding: '0 2rem 0 2rem', margin:'2vh 0', maxHeight: '', fontSize: 'clamp(1rem, 3.5vw, 3.2rem)', textAlign:'center', textShadow: '0 2px 3px #000', color: '#fff', background: 'rgba(0,0,0,0.50)', backdropFilter: 'blur(12px)', borderRadius: '10px' }}>
    <h2>Technology Stack</h2>
  </div>

  <div className="nameblock" style={{position:'sticky', top:'0', marginTop: '', width:'100%', padding: '2rem', margin:'2vh 0', maxHeight: '', fontSize: 'clamp(1rem, 2vw, 3.2rem)', textAlign:'left', textShadow: '0 2px 3px #000', color: 'var(--theme-ui-colors-text)', background: 'var(--theme-ui-colors-cardBg)', backdropFilter: 'blur(12px)', borderRadius: '10px' }}>


    <p>PIRATE is built on industry leading technologies, and is designed from the ground up, using the best, most secure and modern development technology available today.</p>

    <p style={{textAlign:'center'}}>Free yourself from the social media bonds and become your own Captain.</p>
  </div>


<div className="flexbutt" style={{gap:'2vw'}}>
<div className="flexcheek" style={{display:'flex', gap:'2vw', flexDirection:'row', justifyContent:'space-around', fontSize: 'clamp(1rem, 1vw, 2.2rem)', textAlign:'center', width:'100%', alignItems:'center'}}> 

<StaticImage src="../../static/assets/partner3.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

<StaticImage src="../../static/assets/partner1.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

<StaticImage src="../../static/assets/partner4.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />


</div>
<div className="flexcheek" style={{display:'flex', gap:'2vw', flexDirection:'row', justifyContent:'space-around', fontSize: 'clamp(1rem, 1vw, 2.2rem)', textAlign:'center', width:'100%', alignItems:'center'}}> 

<StaticImage src="../../static/assets/partner2.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

<StaticImage src="../../static/assets/partner5.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />

<StaticImage src="../../static/assets/partner6.webp" alt="Default Image" style={{height:'auto', maxHeight:'100vh', position:'relative', zIndex:'0', top:'0',border:'1px solid #222', borderRadius:'8px', objectFit:'contain', margin:'0 auto'}} />
</div>
</div>
</section>

        <GoBack />
        
      </div>

      <br />
      <br />
      <Footer />
    </Layout>
  )
}

export default AboutPage
