import React from 'react'
import styled from 'styled-components';
import { fontFamily } from '../../utils/fontFamily';
import { fontSize } from '../../utils/fontSize';
import { fontWeight } from '../../utils/fontWeight';
import { Colors } from '../../utils/colors';
import { breakPoint } from '../../utils/breakPoint'

const Describe = styled.p`
    font-family: ${fontFamily.openSansFont};
    font-size: ${fontSize.paragraphMobile};
    font-weight: ${fontWeight.medium};
    color: ${Colors.colorMainFont};
    @media screen and (min-width: ${breakPoint.desktop}) {
        font-size: ${fontSize.paragraphDesktop};
    }
`;

const Subtitle = styled.h4`
    font-family: ${fontFamily.openSansFont};
    font-size: ${fontSize.subtitleMobile};
    font-weight: ${fontWeight.medium};
color: ${Colors.colorMainFont};
padding: 15px 0;
@media screen and (min-width: ${breakPoint.desktop}) {
    font-size: ${fontSize.subtitleDesktop};
}
`;

class VideoInfoComponent extends React.Component<any>{

    state = {
        star: "star_white.svg",
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