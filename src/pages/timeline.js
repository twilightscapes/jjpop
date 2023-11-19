import React, { useState, useRef, useEffect } from "react";
import AuthenticatedTimeline from "../components/AuthenticatedTimeline";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/socialLayout";

const TimeLine = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/static/content/pages/index.md$/" }) {
        frontmatter {
          pagePW
        }
      }
    }
  `);

  const [passwordUpdated, setPasswordUpdated] = useState(false);



  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && event.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const safeLocalStorageGetItem = (key) => {
    if (typeof window === "undefined") {
      return null;
    }
    return localStorage.getItem(key);
  };

  const safeLocalStorageSetItem = (key, value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  };

  const [pagePassword, setPagePassword] = useState(
    safeLocalStorageGetItem("pagePassword") || data.markdownRemark.frontmatter.pagePW || ""
  );
  const [password, setPassword] = useState(Array(4).fill(""));
  const [verified, setVerified] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, password.length);
  }, [password]);

  useEffect(() => {
    const storedPassword = safeLocalStorageGetItem("pagePassword");
    if (!storedPassword && data.markdownRemark.frontmatter.pagePW) {
      setPagePassword(data.markdownRemark.frontmatter.pagePW);
    } else if (storedPassword && storedPassword.length > 0) {
      setPagePassword(storedPassword);
    }
    console.log(`Password input fields cleared: ${password}`);
    console.log(`Password saved to local storage: ${pagePassword}`);
  }, []);

  useEffect(() => {
    if (!passwordUpdated) return;
  
    if (password.join("").toLowerCase() === pagePassword.toLowerCase()) {
      setVerified(true);
      safeLocalStorageSetItem("pagePassword", pagePassword);
      setPassword(Array(4).fill(""));
      console.log(`Password input fields cleared: ${password}`);
    }
    console.log(`Password updated to: ${pagePassword}`);
  
    setPasswordUpdated(false);
  }, [password, pagePassword, passwordUpdated]);
  

  const handleInputChange = (event, index) => {
  const newValue = event.target.value;

  setPassword((prev) => {
    const newPW = [...prev];
    newPW[index] = newValue;
    return newPW;
  });

  setPasswordUpdated(true);

  if (newValue && index < inputRefs.current.length - 1) {
    setTimeout(() => {
      inputRefs.current[index + 1].focus();
    }, 0);
  }
};


  if (verified) {
    return (
      <div className="timeline-wrapper">
        <div className="timeline-background verified"></div>
        <AuthenticatedTimeline />
      </div>
    );
  }

  if (pagePassword) {
    return (
      <Layout>
        <div
          className="timeline-wrapper"
          style={{
            display: "grid",
            placeContent: "center",
            height: "100vh",
          }}
        >
          <h2
            style={{
              color: "var(--theme-ui-colors-text)",
              textAlign: "center",
              fontSize: "150%",
            }}
          >
            This User has Protected their profile</h2>
      <div style={{ textAlign:'center', border:'1px solid #777', borderRadius:'8px', padding:'4vh 4vw', background:'rgba(0, 0, 0, .5)'}}>
      <h3 style={{color:'var(--theme-ui-colors-text)', textAlign:'center'}}>Enter 4 Digit Code:</h3>
      
          <form style={{ position:'relative', fontSize: "", width: "", height:'', margin: "0 auto", zIndex:'2', display:'flex', justifyContent:'center'}}>
          
            {password.map((_, index) => (
              <input
  key={index}
  ref={(el) => (inputRefs.current[index] = el)}
  type="password"
  maxLength="1"
  onChange={(event) => handleInputChange(event, index)}
  onKeyDown={(event) => handleKeyDown(event, index)}
  style={{
    fontSize: "3rem",
    width: "4rem",
    margin: "1rem",
    textAlign: "center",
    border: "1px solid",
    borderRadius: "8px",
    background: "rgba(0, 0, 0, .5)",
    color: "#999",
  }}
  autoFocus={index === 0}
  autoCapitalize="none"
/>

            ))}
          </form>
          <h3 style={{color:'var(--theme-ui-colors-text)', textAlign:'center'}}>to view this content.</h3>
          {/* <div className="timeline-background">
            <div className="panellock"></div>
            <div className="panellock"></div>
          </div> */}
          </div>
        </div>
      </Layout>
    );
  }

  return <AuthenticatedTimeline />;
};

export default TimeLine;
