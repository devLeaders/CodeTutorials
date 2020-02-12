import styled from 'styled-components/native';
import {FontSize} from '../variables/FontSize';
import {FontWeight} from '../variables/FontWeight';
import {FontFamily} from '../variables/FontFamily';
import {FontColors} from '../variables/FontColors';
import {BackgroundColor} from '../variables/BackgroudnColor';

export const Background = styled.ScrollView({
  backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
  flexDirection: 'column',
});
export const Container = styled.View({
  backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Player = styled.View({
  justifyContent: 'center',
});

export const PlayerImage = styled.ImageBackground({
  height: 280,
  width: 420,
});

export const BackButton = styled.TouchableOpacity({
  padding: 5,
  height: 27,
  width: 27,
  position: 'absolute',
  top: 10,
  left: 15,
});

export const BackArrowImage = styled.Image({
  height: 25,
  width: 25,
  position: 'absolute',
  top: 10,
  left: 15,
});

export const RowContainer = styled.View({
  backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 10,
});

export const ColumContainerLeft = styled.View({
  backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
  flexDirection: 'column',
});

export const ColumContainerRight = styled.View({
  backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
  flex: 2,
});

export const RatioContainer = styled.View({
  backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
  flexDirection: 'row',
  marginLeft: 70,
  marginTop: 18,
});

export const StarsContainer = styled.View({
  backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
  flexDirection: 'row',
  alignSelf: 'flex-start',
  marginLeft: 70,
  marginTop: 18,
});

export const Star = styled.Image({
  height: 25,
  width: 25,
  marginRight: 2,
});

export const Heart = styled.Image({
  height: 40,
  width: 40,
  marginLeft: 30,
});

export const HeartRatio = styled.Text({
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.RATIO,
  color: FontColors.HEADERS,
  alignSelf: 'stretch',
});

export const VoteText = styled.Text({
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.MIDIUM,
  fontWeight: FontWeight.BOLD,
  color: FontColors.HEADERS,
  marginTop: 5,
  marginRight: 3,
});

export const MovieName = styled.Text({
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.MOVIENAME,
  fontWeight: FontWeight.BOLD,
  color: FontColors.HEADERS,
});

export const MovieKind = styled.Text({
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.MIDIUM,
  fontWeight: FontWeight.BOLD,
  color: FontColors.DESCRIPTION,
});

export const MovieTime = styled.Text({
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.VERYSMALL,
  fontWeight: FontWeight.BOLD,
  color: FontColors.DESCRIPTION,
});

export const Owerview = styled.Text({
  marginTop: 15,
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.VERYSMALL,
  fontWeight: FontWeight.BOLD,
  color: FontColors.HEADERS,
});

export const Description = styled.Text({
  marginLeft: 10,
  fontFamily: FontFamily.ARIAL,
  fontSize: FontSize.DESCRIPTION,
  color: FontColors.DESCRIPTION,
});

export const PlayButton = styled.TouchableOpacity({
  padding: 5,
  height: 45,
  width: 45, //The Width must be the same as the height
  borderRadius: 90, //Then Make the Border Radius twice the size of width or Height
  backgroundColor: 'transparent',
  justifyContent: 'flex-start',
  alignContent: 'space-around',
  alignSelf: 'center',
  position: 'absolute',
  top: 225,
  left: 190,
});

export const Triangle = styled.Image({
    padding: 5,
    height: 50,
    width: 50, //The Width must be the same as the height
    borderRadius: 90, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignContent: 'space-around',
    alignSelf: 'center',
});

export const ImageList = styled.View({
  backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
  justifyContent: 'flex-start',
  flexDirection: 'row',
});

export const ImageItem = styled.Image({
  height: 90,
  width: 90,
  marginLeft: 10,
  borderRadius: 0,
  borderColor: BackgroundColor.GREY,
  borderWidth: 1,
});

export const Separator = styled.View({
  width: 10,
});

export const ViewImage = styled.View({
  height: 90,
  width: 90,
});
