import styled from 'styled-components/native';
import { FontSize } from '../../variables/FontSize';
import { FontWeight } from '../../variables/FontWeight';
import { FontFamily } from '../../variables/FontFamily'
import { Color } from '../../variables/Color'

export const Hamburger = styled.Image({
    width: 16,
    height: 16,
    marginTop: 17,
    marginBottom: 17,
    marginLeft: 16,
    
})

export const FilterList = styled.Text({
    textAlign: "center",
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.NORMAL,
    fontWeight: FontWeight.BOLD,
    color: Color.DARKGREY,
 
})

export const Arrow = styled.Image({
    width: 7,
    height: 9,
    padding: 5,
    left: 10

})

export const Search = styled.Image({
    width: 16,
    height: 16,
    marginTop: 17,
    marginBottom: 17,
    marginRight: 16,
})

export const ViewButtons = styled.View({
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginLeft: 20, 
    marginRight: 20, 
    marginTop: 20
})

export const ButtonFilter = styled.TouchableOpacity({
    width: 108,
    height: 28,
    borderRadius: 9,
    backgroundColor: Color.WHITE,
    justifyContent: "center",
    shadowColor: "#4f1035ec",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
})

export const TextButtonActive = styled.Text ({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.NORMAL,
    fontWeight: FontWeight.BOLD,
    lineHeight: 16,
    textAlign: "center",
    color: Color.DARKGREY
})

export const TextButtonNOAct = styled.Text ({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.NORMAL,
    fontWeight: FontWeight.BOLD,
    lineHeight: 19,
    textAlign: "center",
    opacity: 0.5,
    color: Color.DARKGREY,
    backgroundColor: Color.LIGHTGREY
})

export const ButtonNOFilter = styled.TouchableOpacity({
    width: 108,
    height: 28,
    borderRadius: 9,
    backgroundColor: Color.LIGHTGREY,
    justifyContent: "center",
})

export const ViewMargin = styled.View({
    marginTop: 27
})

export const ViewSeparator = styled.View({
    width:20
})

export const ViewGroupSlaider = styled.View({
    height:136, 
    width:359
})

export const ImageSlaider = styled.Image({
    width:359,
    height:136, 
    resizeMode: 'cover', 
    borderRadius: 10
})

export const GroupForSubtitle = styled.View({
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginLeft: 15,
    marginRight: 15,
    marginTop: 24,
    marginBottom: 5
})

export const SubTitleLeft = styled.Text({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.NORMAL,
    fontWeight: FontWeight.BOLD,
    lineHeight: 19,
    color: Color.DARKGREY, 
    marginLeft: 15
})

export const SubTitleRight = styled.Text({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.NORMAL,
    fontWeight: FontWeight.BOLD,
    lineHeight: 19,
    color: Color.DARKGREY
})

export const ImageSecondSlaider = styled.Image({
    width: 172,
    height: 216,
    borderRadius: 12,
    resizeMode: 'cover', 
})

export const ViewTherdSlaider = styled.View({
    width: 81,
    height: 150,

})

export const ImageTherdSlaider = styled.Image({
    width: 81,
    height: 107,
    borderRadius: 7,
    resizeMode: 'cover',
    marginBottom: 4
})

export const SubTitleLeftSecond = styled.Text({
    textAlign: "left",
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.NORMAL,
    fontWeight: FontWeight.BOLD,
    lineHeight: 19,
    color: Color.DARKGREY, 
    marginLeft: 15,
    marginBottom: 0,
    top: 20
})

export const SubTitleRightSecond = styled.Text({
    position: 'absolute', 
    right: 14,
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.NORMAL,
    fontWeight: FontWeight.BOLD,
    lineHeight: 19,
    top: 20,
    marginBottom: 0,
    color: Color.DARKGREY
})

export const GroupForDescription = styled.View({
    flexDirection: 'row', 
    justifyContent: "center", 
    marginTop: 4
})

export const IcHeart = styled.Image({
    width: 6.1, 
    height: 5.8, 
    marginRight: 3
})

export const ItemLike = styled.Text({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.SMALL,
    fontWeight: FontWeight.REGULAR,
    lineHeight: 10,
    justifyContent: "center",
    color: Color.DARKGREY
})

export const GroupCenter = styled.View({
    justifyContent: "center",
    flexDirection: "row"
})

export const ViewTitle = styled.Text({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.SMALL,
    fontWeight: FontWeight.REGULAR,
    lineHeight: 8,
    color: Color.DARKGREY
})

export const ViewMarginSmall = styled.View({
    marginTop:10
})

export const ViewGroupUnderCategory = styled.View({
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginLeft: 15,
    marginRight: 15,
    marginTop: 24,
    marginBottom: 5
})