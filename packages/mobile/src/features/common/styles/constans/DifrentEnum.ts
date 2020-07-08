import { Dimensions } from "react-native";

export enum DifrentSlaider {
    WIDTHLARGE = 359,
    WIDTHNORMAL = 172,
    WIDTHSMALL = 81
}

const { width: wWidth} = Dimensions.get('window');
export const width = wWidth 