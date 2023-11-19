// import * as React from "react"
// import { StoreProvider } from "./src/context/store-context"



// export const wrapRootElement = ({ element }) => (

  
//   <StoreProvider>{element}</StoreProvider>
// )



// import React from "react";
// import { AuthProvider } from "./src/AuthProvider";

// export const wrapRootElement = ({ element }) => {
//   return <AuthProvider>{element}</AuthProvider>;
// };


export const onInitialClientRender = () => {
  setTimeout(function() {
      document.getElementById("___loader").style.display = "none"
  }, 1000)
}



export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated since your last visit. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}



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
//                     actions: [ // you can customize these actions as you like
//                         {
//                             action: window.location.reload(), // you should define this
//                             title: 'update'
//                         },
//                         {
//                             action: window.confirm(
//                               `This website has been updated since your last visit. ` +
//                                 `Reload to display the latest version?`
//                             ), // you should define this
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




