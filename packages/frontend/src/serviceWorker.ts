import fb from "./config/firebase/firebaseInit";

const messaging = fb.messaging();
messaging.usePublicVapidKey(
  "BF-HkewrYpoAcowNgCltNvAtPZUZny8jjQkioxzEHkXJe2_M5PLshvsOOl3DyKLZOWruB-JB2_hKQfShYNWf67k"
);

const registerToken = async () => {
  try {
    await Notification.requestPermission();
    const registrationToken = await messaging.getToken();
    await localStorage.setItem("notification-token", registrationToken);
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
    click_action?: string;
  };
}

messaging.onMessage((payload: PayloadInterface) => {
  const { title, body, icon, click_action } = payload.notification;
  const options = {
    body,
    icon,
  };
  const notification = new Notification(title, options);
  notification.onclick = (e) => {
    e.preventDefault();
    window.open(click_action, "_blank");
  };
});
