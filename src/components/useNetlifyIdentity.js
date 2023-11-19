// useNetlifyIdentity.js
import { useEffect } from 'react';

const useNetlifyIdentity = (setLoggedIn) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import the netlify-identity-widget package
      import('netlify-identity-widget').then(({ default: netlifyIdentity }) => {
        // Initialize Netlify Identity
        netlifyIdentity.init();

        // Check for the current user
        const currentUser = netlifyIdentity.currentUser();
        if (currentUser) {
          setLoggedIn(true);
        }

        // Set up an event listener for login/logout events
        const updateUserStatus = () => {
          const user = netlifyIdentity.currentUser();
          setLoggedIn(!!user);
        };

        netlifyIdentity.on('login', updateUserStatus);
        netlifyIdentity.on('logout', updateUserStatus);

        // Clean up the event listeners
        return () => {
          netlifyIdentity.off('login', updateUserStatus);
          netlifyIdentity.off('logout', updateUserStatus);
        };
      });
    }
  }, [setLoggedIn]);
};

export default useNetlifyIdentity;
