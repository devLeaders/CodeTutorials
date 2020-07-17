import styled from 'styled-components/native'
import { FontSize } from '../../../common/styles/constans/FontSize';
import { FontWeight } from '../../../common/styles/constans/FontWeight';
import { Color } from '../../../common/styles/constans/Color'
import { DifrentSlaider } from '../../../common/styles/constans/DifrentEnum';
import { MyText } from '../../../common/styles/MyText';
import { Animated, Dimensions } from 'react-native';

export const Hamburger = styled.Image({
    width: 16,
    height: 16,
    marginTop: 17,
    marginBottom: 17,
    marginLeft: 16, 
})

export const ScrollViewStyle = styled.ScrollView({
    marginHorizontal: 20
})

export const FilterList = styled(MyText)({
    textAlign: "center",
    fontSize: FontSize.NORMAL,
    fontWeight: parseInt(FontWeight.BOLD, 10),
    color: Color.DARKGREY,
})

export const Arrow = styled.Image({
    width: 7,
    height: 9,
    padding: 5,
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
    shadowOpacity: "0.25",
    shadowRadius: 3.84,
    elevation: "5",
})

export const TextButtonActive = styled(MyText)({
    fontSize: FontSize.NORMAL,
    fontWeight: parseInt(FontWeight.BOLD, 10) ,
    lineHeight: "16px",
    textAlign: "center",
    color: Color.DARKGREY
})

export const TextButtonNOAct = styled(MyText)({
    fontSize: FontSize.NORMAL,
    fontWeight: parseInt(FontWeight.BOLD, 10),
    lineHeight: "19px",
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

export const ViewSeparator = styled.View({
    width:10 
})

const { width } = Dimensions.get("window");
export const ImageWidth = width -100;

export const ImageSlaider = styled(Animated.Image)({
    width: ImageWidth,
    height: 168, 
    resizeMode: 'cover', 
    borderRadius: 10,
    marginLeft: 10
})

export const GroupForSubtitle = styled.View({
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginLeft: 15,
    marginRight: 15,
    marginTop: 24,
    marginBottom: 5
})

export const SubTitleLeft =styled(MyText)({
    fontSize: FontSize.NORMAL,
    fontWeight: parseInt(FontWeight.BOLD, 10),
    lineHeight: "19px",
    color: Color.DARKGREY, 
    marginLeft: 15
})

export const SubTitleRight = styled(MyText)({
    fontSize: FontSize.NORMAL,
    fontWeight: parseInt(FontWeight.BOLD, 10),
    lineHeight: "19px",
    color: Color.DARKGREY
})

export const ImageSecondSlaider = styled.Image({
    width: DifrentSlaider.WIDTHNORMAL,
    height: 216,
    borderRadius: 12,
    resizeMode: 'cover', 
})

export const ImageTherdSlaider = styled.Image({
    width: DifrentSlaider.WIDTHSMALL,
    height: 107,
    borderRadius: 7,
    resizeMode: 'cover',
    marginBottom: 4
})

export const SubTitleLeftSecond =styled(MyText)({
    textAlign: "left",
    fontSize: FontSize.NORMAL,
    fontWeight: parseInt(FontWeight.BOLD, 10),
    lineHeight: "19px",
    color: Color.DARKGREY, 
    marginLeft: 15,
    marginBottom: 0,
})

export const SubTitleRightSecond = styled(MyText)({
    right: 14,
    fontSize: FontSize.NORMAL,
    fontWeight: parseInt(FontWeight.BOLD, 10),
    lineHeight: "19px",
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

export const ItemLike = styled(MyText)({
    fontSize: FontSize.SMALL,
    fontWeight: parseInt(FontWeight.REGULAR, 10) ,
    lineHeight: "10px",
    justifyContent: "center",
    color: Color.DARKGREY
})

export const GroupCenter = styled.View({
    justifyContent: "center",
    flexDirection: "row"
})

export const ViewTitle = styled(MyText)({
    fontSize: FontSize.SMALL,
    fontWeight: parseInt(FontWeight.REGULAR, 10) ,
    lineHeight: "8px",
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