import React from "react";
import { AlertV, AlertIc, AlertView, AlertText } from "../../../features/common/components/TabBottomNavStyle";

export default class AlertIcon extends React.Component {
    render(){
        return(
            <AlertV>
                <AlertIc source={{uri:'ic_alert'}}/>
                <AlertView>
                    <AlertText>2</AlertText>
                </AlertView>
            </AlertV>
        )
    }
}