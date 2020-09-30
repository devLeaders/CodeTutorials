import { Platform } from "react-native";

export const getShadowStyle = ( elevation: number, shadowColor:string , shadowOpacity:number ,forStyledComponent: boolean = true, offset:number = 1,) => {
    if (Platform.OS === "ios")
			return {
				shadowColor: shadowColor,
				shadowOffset: forStyledComponent ? 0 : {offset: offset, height: offset},
				shadowOpacity: shadowOpacity.toString(),
				shadowRadius: elevation,
			};
		else
			return {
				elevation: elevation,
			};
}