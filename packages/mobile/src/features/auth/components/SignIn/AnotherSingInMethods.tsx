import * as React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
`;

const ImageWrapper = styled.View`
  marginTop: 10px;
  flexDirection: row;
  justifyContent: space-around;
`;

const Img = styled.Image`
    width: 50px;
    height: 50px;
    border-color: red;
`;

const ButtonOpacity = styled.TouchableOpacity`
`;

interface AnotherSingInMethodsProps {
  src1: string;
  src2: string;
  src3: string;
}

const AnotherSingInMethods: React.FC<AnotherSingInMethodsProps> = props => {
 return (
    <Wrapper>
      <ImageWrapper>
        <ButtonOpacity>
          <Img source={{uri: props.src1}} />
        </ButtonOpacity>
        <ButtonOpacity>
          <Img source={{uri: props.src2}} />
        </ButtonOpacity>
        <ButtonOpacity>
          <Img source={{uri: props.src3}} />
        </ButtonOpacity>
      </ImageWrapper>
    </Wrapper>
);
}

export default AnotherSingInMethods;
