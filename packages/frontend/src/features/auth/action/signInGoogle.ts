import { auth, provider } from "../../../config/firebase/firebaseInit";
import * as AuthConnectors from "@project/common/features/auth/connectors";
import AxiosInstance from "@project/common/features/config/axios/configAxios";
import { Navigation } from "../../../config/routing/NavigationPath";

export const signInGoogle = async () => {
  try {
    const result = (await auth.signInWithPopup(provider)) as firebase.auth.UserCredential;
    const credential = result.credential as firebase.auth.OAuthCredential;
    const idToken = credential.idToken;
    const dataResponse = await AuthConnectors.signInGoogle({
      idToken,
    });

    const token = dataResponse.data.token;
    AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    sessionStorage.setItem("token", token);
    window.location.replace(Navigation.HOME);
  } catch (err) {
    console.log(err);
  }
};
