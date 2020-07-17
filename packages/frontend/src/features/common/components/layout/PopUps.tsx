import * as React from 'react';
import {useSelector, RootStateOrAny} from "react-redux"

import UserPanel from "../layout/userPanel/UserPanel";
import AllertsContainer from "../../../allertsPanel/components/AllertsPanel";

 
const PopUps: React.SFC = () => {
    const active = useSelector((state: RootStateOrAny) => state.popUps)

    return ( 
        <>
            <UserPanel active={active.user}/>
            <AllertsContainer active={active.alerts}/>
        </>
     );
}
 
export default PopUps;