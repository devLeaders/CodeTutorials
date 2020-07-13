import React from 'react';
import styled from 'styled-components';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { Color } from '../../../common/styles/constans/Color';
import { MyText } from '../../../common/styles/MyText';
import BigHeaderButton from './BigHeaderButton';


export default class SmallHeaderButton2 extends BigHeaderButton {
    
     ButtonFilter = styled.TouchableOpacity({
        //marginRight: 10,
        height: 26,
        minWidth: 51,
        justifyContent: 'center',
      });
    
       TextButton = styled(MyText)`
        font-size: ${FontSize.SMALLXS};
        font-weight: ${FontWeight.LIGHT};
        text-align: left;
        min-width: 26px;
    `;
    
       ImageButton = styled.Image`
        margin-left: 0px;
        height: 10px;
        width: 10px;
    `;
}