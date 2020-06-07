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

export const RowContainer = styled.View({
  backgroundColor: Color.PALE_GREY,
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 10,
});

export const ColumContainerLeft = styled.View({
  flex: 1,
  backgroundColor: Color.PALE_GREY,
  flexDirection: 'column',
});

export const ColumContainerRight = styled.View({
  backgroundColor: Color.PALE_GREY,
});

export const RatioContainer = styled.View({
  backgroundColor: Color.PALE_GREY,
  flexDirection: 'row',
  marginLeft: 70,
  marginTop: 18,
});

export const StarsContainer = styled.View({
  backgroundColor: Color.PALE_GREY,
  flexDirection: 'row',
  alignSelf: 'flex-start',
  marginLeft: 70,
  marginTop: 18,
});

export const Star = styled.Image({
  height: 25,
  width: 25,
  marginRight: 2,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.39,
  shadowRadius: 8.3,

  elevation: "13",
});

export const Heart = styled.Image({
  height: 40,
  width: 40,
  marginLeft: 30,
});

export const HeartRatio = styled(MyText)({
  fontSize: FontSize.BIG,
  color: Color.DARK_BROWN,
  alignSelf: 'stretch',
});

export const VoteText = styled(MyText)({
  fontSize: FontSize.MIDIUM,
  fontWeight: FontWeight.BOLD,
  color: Color.DARK_BROWN,
  marginTop: 5,
  marginRight: 3,
});

export const MovieName = styled(MyText)({
  fontSize: FontSize.LARGE,
  fontWeight: FontWeight.BOLD,
  color: Color.DARK_BROWN,
});

export const MovieKind = styled(MyText)({
  fontSize: FontSize.MIDIUM,
  fontWeight: FontWeight.BOLD,
  color: Color.DARK_GREY,
});

export const MovieTime = styled(MyText)({
  fontSize: FontSize.VERYSMALL,
  fontWeight: FontWeight.BOLD,
  color: Color.DARK_GREY,
});

export const Owerview = styled(MyText)({
  marginTop: 15,
  fontSize: FontSize.VERYSMALL,
  fontWeight: FontWeight.BOLD,
  color: Color.DARK_BROWN,
});

export const Description = styled(MyText)({
  marginLeft: 10,
  fontSize: FontSize.VERY_BIG,
  color: Color.DARK_GREY,
});

export const PlayButton = styled.TouchableOpacity({
  padding: 5,
  height: 45,
  width: 45, //The Width must be the same as the height
  borderRadius: 90, //Then Make the Border Radius twice the size of width or Height
  backgroundColor: 'transparent',
  alignContent: 'space-around',
  alignSelf: 'center',
  position: 'absolute',
  top: SIZE.HEIGHT - 25,
  justifyContent: 'center',
});

export const Triangle = styled.Image({
  padding: 5,
  height: 50,
  width: 50, //The Width must be the same as the height
  borderRadius: 100, //Then Make the Border Radius twice the size of width or Height
  backgroundColor: 'white',
  justifyContent: 'center',
});

export const ImageList = styled.View({
  backgroundColor: Color.PALE_GREY,
  justifyContent: 'flex-start',
  flexDirection: 'row',
  marginLeft: 10,
});

export const ImageItem = styled.Image({
  height: 90,
  width: 90,
  borderRadius: 0,
  borderColor: Color.DARK_GREY,
  borderWidth: 1,
});

export const Separator = styled.View({
  width: 10,
});

export const ViewImage = styled.View({
  height: 90,
  width: 90,
});