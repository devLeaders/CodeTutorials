import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { NavigationName } from './NavigationName';

export type ParamList = {
    Home: undefined;
    MovieList: undefined;
    SingleMovie: undefined;
    SigInScreen: undefined;
    SignUpScreen: undefined;
    TabNavigator: undefined;
    
    Menu: undefined;
    Zespoly: undefined;
    Zadania: undefined;
    Playlista: undefined;
    Alerty: undefined;
    Szukaj: undefined;
};

export type NavProps<ParamName extends keyof ParamList> =  { 
    navigation: StackNavigationProp<ParamList, ParamName>;
    route: RouteProp<ParamList, ParamName>; 
}