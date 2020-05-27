import * as React from 'react';
import Filters from "../../filters/components/Filters"
import BannerContainer from "../../common/components/layout/banner/BannerContainer"
export interface TempProps {
    
}
 
const Temp: React.SFC<TempProps> = () => {
    return (  
        <>
        <Filters/>
        <BannerContainer/>
        </>
    );
}
 
export default Temp;