importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "codetutorials-f9ede.firebaseapp.com",
  databaseURL: "https://codetutorials-f9ede.firebaseio.com/",
  projectId: "codetutorials-f9ede",
  storageBucket: "codetutorials-f9ede.appspot.com",
  messagingSenderId: "29847575452",
  appId: "1:29847575452:web:1396be3ecb16e7c16c4659",
  measurementId: "G-8J72TLB6RZ",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler((payload) => {
  const { title, body, icon } = payload.notification;
  const options = {
    body,
    icon,
  };
  return self.registration.showNotification(title, options);
});
