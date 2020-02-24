import styled from 'styled-components/native';
import {FontSize} from '../../variables/FontSize';
import {FontWeight} from '../../variables/FontWeight';
import {FontFamily} from '../../variables/FontFamily';
import {Color} from '../../variables/Color';

export enum SIZE {
  WIDTH = 420,
  HEIGHT = 280,
}

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
  width: SIZE.WIDTH,
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

export const HeartRatio = styled.Text({
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.RATIO,
  color: Color.DARK_BROWN,
  alignSelf: 'stretch',
});

export const VoteText = styled.Text({
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.MIDIUM,
  fontWeight: FontWeight.BOLD,
  color: Color.DARK_BROWN,
  marginTop: 5,
  marginRight: 3,
});

export const MovieName = styled.Text({
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.VERY_BIG,
  fontWeight: FontWeight.BOLD,
  color: Color.DARK_BROWN,
});

export const MovieKind = styled.Text({
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.MIDIUM,
  fontWeight: FontWeight.BOLD,
  color: Color.DARK_GREY,
});

export const MovieTime = styled.Text({
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.VERYSMALL,
  fontWeight: FontWeight.BOLD,
  color: Color.DARK_GREY,
});

export const Owerview = styled.Text({
  marginTop: 15,
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.VERYSMALL,
  fontWeight: FontWeight.BOLD,
  color: Color.DARK_BROWN,
});

export const Description = styled.Text({
  marginLeft: 10,
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.DESCRIPTION,
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
  //alignContent: 'space-around',
  //alignSelf: 'center',
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
  //shadowColor: '#4f1035ec',
  //shadowOpacity: 0.5,
  //shadowRadius: 15,
});

export const Separator = styled.View({
  width: 10,
});

export const ViewImage = styled.View({
  height: 90,
  width: 90,
});
