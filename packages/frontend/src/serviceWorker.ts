import firebase from "firebase";
import "firebase/messaging";
import AxiosInstance from "@project/common/features/config/axios/configAxios";
import { AxiosPromise } from "axios";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
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
messaging.usePublicVapidKey(
  "BF-HkewrYpoAcowNgCltNvAtPZUZny8jjQkioxzEHkXJe2_M5PLshvsOOl3DyKLZOWruB-JB2_hKQfShYNWf67k"
);

interface TokenPost {
  registrationToken: string;
  userVisibleOnly: boolean;
}

export const postRegistrationToken = (obj: TokenPost): AxiosPromise<any> => {
  return AxiosInstance.post(`/notifications/firebase`, obj);
};

const registerToken = async () => {
  try {
    await Notification.requestPermission();
    const registrationToken = await messaging.getToken();
    await localStorage.setItem("notification-token", registrationToken);
    await postRegistrationToken({
      userVisibleOnly: true,
      registrationToken: registrationToken,
    });
  } catch (err) {
    // window.location.reload();
  }
};
const tokenRefresh = () => {
  messaging.onTokenRefresh(() => {
    messaging
      .getToken()
      .then((refreshedToken) => {
        localStorage.setItem("notification-token", refreshedToken);
        postRegistrationToken({
          userVisibleOnly: true,
          registrationToken: refreshedToken,
        });
      })
      .catch((err) => {
        console.log("Unable to retrieve refreshed token ", err);
      });
  });
};

export const registerSW = () => {
  if ("serviceWorker" in navigator && "PushManager" in window) {
    if (!localStorage.getItem("notification-token")) {
      registerToken();
    } else return tokenRefresh();
  }
};

interface PayloadInterface {
  notification: {
    title: string;
    body: string;
    icon: string;
  };
}

messaging.onMessage((payload: PayloadInterface) => {
  const { title, body, icon } = payload.notification;
  const options = {
    body,
    icon,
  };
  return new Notification(title, options);
});
