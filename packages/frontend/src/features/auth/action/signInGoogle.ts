import { auth, provider } from "../../../config/firebase/firebaseInit";
import * as AuthConnectors from "@project/common/features/firebase-auth/connectors";
import AxiosInstance from "@project/common/features/config/axios/configAxios";
import { Navigation } from "../../../config/routing/NavigationPath";

export const signInGoogle = async (setError: (arg: boolean) => void) => {
  try {
    const result = (await auth.signInWithPopup(provider)) as firebase.auth.UserCredential;
    const idToken = await auth.currentUser?.getIdToken(true);
    console.log(idToken);
    const dataResponse = await AuthConnectors.signInGoogle({
      idToken,
    });

    const token = dataResponse.data.token;
    AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    sessionStorage.setItem("token", token);
    window.location.replace(Navigation.HOME);
  } catch (err) {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 5000);
  }
};
