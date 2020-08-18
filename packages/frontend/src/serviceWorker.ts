import fb from "./config/firebase/firebaseInit";
import { postRegistrationToken } from "@project/common/features/notifications/connectors";

const messaging = fb.messaging();
messaging.usePublicVapidKey(
  "BF-HkewrYpoAcowNgCltNvAtPZUZny8jjQkioxzEHkXJe2_M5PLshvsOOl3DyKLZOWruB-JB2_hKQfShYNWf67k"
);

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
