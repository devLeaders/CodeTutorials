import {ToastAndroid, Platform, Alert} from 'react-native';

const handleREgistrationAlert = (system: string, title: string) => {
  Platform.OS === system
    ? Alert.alert(title)
    : ToastAndroid.showWithGravity(
        title,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
};

export default handleREgistrationAlert;
