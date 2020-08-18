import fb from "./config/firebase/firebaseInit";

const messaging = fb.messaging();
interface PayloadInterface {
  notification: {
    title: string;
    body: string;
    icon: string;
  };
}
messaging.setBackgroundMessageHandler((payload: PayloadInterface) => {
  const { title, body, icon } = payload.notification;
  const options = {
    body,
    icon,
  };

  return navigator.serviceWorker.ready.then((registration) =>
    registration.showNotification(title, options)
  );
});
