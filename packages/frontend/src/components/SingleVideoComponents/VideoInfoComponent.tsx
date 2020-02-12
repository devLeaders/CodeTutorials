import React, { Component } from 'react'
import styled from 'styled-components';
import { font } from '../../utils/font';
import { colors } from '../../utils/colors';

const Describe = styled.p`
    font: ${font.ParagraphFontMobile};
    color: ${colors.colorMainFont};
    @media only screen and (min-width: 1024px) {
            font: ${font.ParagraphFontDesktop};
    }
`;

const Subtitle = styled.h4`
font: ${font.SubtitleFontMobile};
color: ${colors.colorMainFont};
padding: 15px 0;
@media only screen and (min-width: 1024px) {
            font: ${font.SubtitleFontDesktop};
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