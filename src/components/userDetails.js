import React, { useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

function UserDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.init();

    netlifyIdentity.on("init", (user) => {
      setUser(user);
    });

    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    return () => {
      netlifyIdentity.off("init");
      netlifyIdentity.off("login");
    };
  }, []);

  return (
    <div>
      <h2>User Details Page</h2>
      {user ? (
        <div>
          <h3>User Details:</h3>
          <p>Email: {user.email}</p>
          <p>User ID: {user.id}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}

export default UserDetails;
