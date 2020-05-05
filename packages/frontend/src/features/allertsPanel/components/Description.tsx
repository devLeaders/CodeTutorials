import * as React from 'react';
import styled from "styled-components"

 
const AllertDescTxt = styled.p`
    font-size: 14px;
    text-align: left;
    line-height: 24px;
`

const Description: React.SFC = () => {
    return ( 
        <AllertDescTxt>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minus mollitia asperiores, totam nam maiores quia labore sapiente nulla fugit aperiam voluptate distinctio, dignissimos ratione sunt ut, illum ullam molestias!Commodi
        </AllertDescTxt>
     );
}
 
export default Description;