import React from 'react'
import styled from 'styled-components';
import { FontFamily } from '../../../common/styles/constans/FontFamily';
import { FontSize } from '../../../common/styles/constans/FontSize';
import { fontWeight } from '../../../common/styles/constans/fontWeight';
import {Colors} from '../../../common/styles/constans/Colors';
import { Device } from '../../../common/styles/constans/Device';

const Describe = styled.p`
    font-family: ${FontFamily.openSansFont};
    font-size: ${FontSize.paragraphMobile};
    font-weight: ${fontWeight.medium};
    color: ${Colors.nBlack};
    @media screen and (min-width: ${Device.desktop}) {
        font-size: ${FontSize.paragraphDesktop};
    }
`;

const Subtitle = styled.h4`
    font-family: ${FontFamily.openSansFont};
    font-size: ${FontSize.subtitleMobile};
    font-weight: ${fontWeight.medium};
color: ${Colors.nBlack};
padding: 15px 0;
@media screen and (min-width: ${Device.desktop}) {
    font-size: ${FontSize.subtitleDesktop};
}
`;

class VideoInfoComponent extends React.Component<any>{

    state = {
        star: "img/star_white.svg",
    }

    render() {
        return (

            <>
                <Subtitle>Podtytuł</Subtitle>
                <Describe>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt commodo dignissim. Suspendisse et nunc facilisis, lobortis dui sit amet, tempus orci. Nunc sodales dapibus augue sed venenatis. In hendrerit placerat odio vel ornare. Etiam pellentesque scelerisque tortor, ut venenatis nulla tincidunt sed. Sed quis dui lacinia, aliquet ex id, faucibus velit. </Describe>
            </>

        )
    }
}

export default VideoInfoComponent;