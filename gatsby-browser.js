// import { StoreProvider } from "./src/context/store-context";
// import { AuthProvider } from "./src/AuthProvider";

// If you're using StoreProvider
// export const wrapRootElement = ({ element }) => (
//   <StoreProvider>{element}</StoreProvider>
// );

// If you're using AuthProvider
// export const wrapRootElement = ({ element }) => (
//   <AuthProvider>{element}</AuthProvider>
// );

export const onInitialClientRender = () => {
  setTimeout(function() {
    document.getElementById("___loader").style.display = "none"
  }, 1000)
}

export const onRouteUpdate = ({ location }) => {
  // Check if the current page is the archive page
  if (location.pathname.startsWith('/archive')) {
    // Implement your logic to persist state here
    // For example, you can use localStorage or sessionStorage
  }
};

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated since your last visit. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

// Uncomment and modify if needed
// export const onServiceWorkerUpdateFound = () => {
//   const showNotification = () => {
//     Notification.requestPermission(result => {
//         if (result === 'granted') {
//             navigator.serviceWorker.ready.then(registration => {
//                 registration.showNotification('Update', {
//                     body: 'New content is available!',
//                     icon: 'static/icons/manifest-icon-512.png',
//                     vibrate: [200, 100, 200, 100, 200, 100, 400],
//                     tag: 'request',
//                     actions: [
//                         {
//                             action: window.location.reload(),
//                             title: 'update'
//                         },
//                         {
//                             action: window.confirm(
//                               `This website has been updated since your last visit. ` +
//                                 `Reload to display the latest version?`
//                             ),
//                             title: 'ignore'
//                         }
//                     ]
//                 })
//             })
//         }
//     })
//   }

//   showNotification()
// }
