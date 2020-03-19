import React from "react";
import InfoBox from "../education/InfoBox";



export class Temp extends React.Component<any> {

    handleClick=()=>{
        console.log("click")
    }

    render(){
        return(
            <InfoBox click={this.handleClick}></InfoBox>
        )
    }
}