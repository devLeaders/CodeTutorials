import styled from 'styled-components/native';
import {FontSize} from '../../../common/styles/constans/FontSize';
import {FontWeight} from '../../../common/styles/constans/FontWeight';
import {Color} from '../../../common/styles/constans/Color';
import { DifrentSlaider } from '../../../common/styles/constans/DifrentEnum';
import { MyText } from '../../../common/styles/MyText';

export enum SIZE {
  WIDTH = 100,
  HEIGHT = 280,
}

export const ViewSeparator = styled.View({
  width:20
});

export const ImageSlaider = styled.Image({
  width: DifrentSlaider.WIDTHLARGE,
  height: 136, 
  resizeMode: 'cover', 
  borderRadius: 10
});

export const ImageSecondSlaider = styled.Image({
  width: DifrentSlaider.WIDTHNORMAL,
  height: 216,
  borderRadius: 12,
  resizeMode: 'cover', 
})


export const Background = styled.ScrollView({
  backgroundColor: Color.PALE_GREY,
  flexDirection: 'column',
});
export const Container = styled.View({
  backgroundColor: Color.PALE_GREY,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Player = styled.View({
  justifyContent: 'center',
  marginBottom: 35,
});

export const PlayerImage = styled.ImageBackground({
  height: SIZE.HEIGHT,
  width: 400,
});

export const BackButton = styled.TouchableOpacity({
  padding: 5,
  height: 27,
  width: 27,
}); 

export const BackArrowImage = styled.Image({
  height: 25,
  width: 25,
});

export const Description = styled(MyText)({
  marginLeft: 10,
  fontSize: FontSize.VERY_BIG,
  color: Color.DARK_GREY,
});

export const Separator = styled.View({
  width: 10,
});

export const Title = styled(MyText)({
  marginLeft: 14,
  marginRight: 16,
  fontWeight: parseInt(FontWeight.BOLD, 10) ,
  fontSize: FontSize.MIDIUM,
  color: Color.DARKGREY,
  marginTop: 74
});