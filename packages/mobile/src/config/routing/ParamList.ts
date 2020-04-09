import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type ParamList = {
    Home: undefined;
    MovieList: undefined;
    SingleMovie: undefined;
    SigInScreen: undefined;
    SignUpScreen: undefined;
};

export type NavProps<ParamName extends keyof ParamList > =  { 
    navigation: StackNavigationProp<ParamList, ParamName>;
    route: RouteProp<ParamList, ParamName>; 
}