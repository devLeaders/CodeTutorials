import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { NavigationName } from './NavigationName';

export type ParamList = {
    [name in NavigationName]:undefined
};

export type NavProps<T extends NavigationName> =  { 
    navigation: StackNavigationProp<ParamList, T>;
    route: RouteProp<ParamList, T>; 
}