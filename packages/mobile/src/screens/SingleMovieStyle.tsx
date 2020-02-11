import styled from 'styled-components/native';
import { FontSize } from '../variables/FontSize';
import { FontWeight } from '../variables/FontWeight';
import { FontFamily } from '../variables/FontFamily';
import { FontColors } from '../variables/FontColors';
import { BackgroundColor } from '../variables/BackgroudnColor';

export const Background = styled.ScrollView({
    backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
    flexDirection: 'column',
})
export const Container = styled.View({
    backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Player = styled.View({
    justifyContent: 'center',
})

export const PlayerImage = styled.ImageBackground({
    height: 250,
    width: 420,
})

export const BackButton = styled.TouchableOpacity({
    padding: 5,
    height: 27,
    width: 27,
    marginTop: 10,
    marginLeft: 15,
})

export const BackArrowImage = styled.Image({
    height: 25,
    width: 25,
})

export const RowContainer = styled.View({
    backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
})

export const RowContainerCenter = styled.View({
    backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 40,
})

export const ColumContainerLeft = styled.View({
    backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
    flexDirection: 'column',
    
    
})

export const ColumContainerRight = styled.View({
    backgroundColor: BackgroundColor.BACKGROUNDCOLOR,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

})

export const MovieName = styled.Text({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.MOVIENAME,
    fontWeight: FontWeight.BOLD,
    color: FontColors.HEADERS,
    
})

export const MovieKind = styled.Text({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.MIDIUM,
    fontWeight: FontWeight.BOLD,
    color: FontColors.DESCRIPTION,
})

export const MovieTime = styled.Text({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.VERYSMALL,
    fontWeight: FontWeight.BOLD,
    color: FontColors.DESCRIPTION,
})

export const Owerview = styled.Text({
    marginTop: 15,
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.VERYSMALL,
    fontWeight: FontWeight.BOLD,
    color: FontColors.HEADERS,
})

export const Description = styled.Text({
    margin: 10,
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.SMALL,
    color: FontColors.DESCRIPTION,
})

export const Heart = styled.Image({
    height: 40,
    width: 40,
})

export const HeartRatio = styled.Text({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.RATIO,
    color: FontColors.HEADERS,
})

export const Star = styled.Text({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.MOVIENAME,
    fontWeight: FontWeight.BOLD,
    color: FontColors.HEADERS,
})
