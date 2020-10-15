import { DrawerActions, useLinkProps, useNavigation } from "@react-navigation/native";
import React, {PropsWithChildren , useCallback} from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Color } from "../../../features/common/styles/constans/Color";
import { NavigationName } from "../NavigationName";

interface FooterButtonProps {
    index: any,
    route: any,
    descriptors: any,
}
export const FooterButton = ({index, route, descriptors, children}:PropsWithChildren<FooterButtonProps>) => {
   
    const { options } = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const navigation = useNavigation();
    const isFocused = index === index;
    const onPress = useCallback(() => {
        if(route.name == NavigationName.MENU){
            navigation.dispatch(DrawerActions.openDrawer())
        } else{
            navigation.navigate(route.name);
        }
    },[]);
    
    return (
        <TouchableOpacity
          key={route.key}
          accessibilityRole="button"
          accessibilityStates={isFocused ? ['selected'] : []}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          style={{ flex: 1}}
        >
          <View style={{alignItems:'center',marginTop:10}} >
            {children}
            <Text style={{ color: isFocused ? Color.PALE_GREY : Color.WHITE }}>
              {label}
            </Text>
          </View>
          
        </TouchableOpacity>
    );
}