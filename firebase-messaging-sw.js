//Import firebase libraries to the client

importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

// Firebase cloud messaging sender ID.
var firebaseConfig = {
  apiKey: "AIzaSyCwfgNaQ2tRgnB349Ku-oUd7x7tMuFrWEw",
  authDomain: "fcmdealpos.firebaseapp.com",
  projectId: "fcmdealpos",
  storageBucket: "fcmdealpos.appspot.com",
  messagingSenderId: "620560052202",
  appId: "1:620560052202:web:e01023b8fa35c7aa4c4c93",
  measurementId: "G-JWC03ZWN0P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Initialise firebase messaging
const messaging = firebase.messaging();

//Background push notification handler. It fires up when the browser or web page in which push notification is activated are closed.
messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon,
        click_action : notification.click_action,
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});

//Displays incoming push notification
self.addEventListener('push', function (event) {

    var eventData = event.data.text();
    var obj = JSON.parse(eventData); //Parse the received JSON object.

    const title = obj.notification.title;
    const options = {
        body: obj.notification.body, 
        icon: obj.notification.icon,
        badge: 'notification-icon.png',
    };

    event.waitUntil(self.registration.showNotification(title, options));
});



