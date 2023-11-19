import React, { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";
// import { navigate } from "gatsby";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    netlifyIdentity.init();

    const currentUser = netlifyIdentity.currentUser();
    if (currentUser) {
      setUser(currentUser);
      setUserName(currentUser.email);
    }

    netlifyIdentity.on("login", (user) => {
      setUser(user);
      setUserName(user.email);
    });

    netlifyIdentity.on("logout", () => {
      setUser(null);
      setUserName('');
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, netlifyIdentity, userName }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext, AuthProvider };
