import styled from 'styled-components/native';
import { FontSize } from '../../variables/FontSize';
import { FontWeight } from '../../variables/FontWeight';
import { FontFamily } from '../../variables/FontFamily'

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
    fontSize: FontSize.SMALL,
    fontWeight: FontWeight.BOLD,
    color: "#363535",
 
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
    backgroundColor: "#ffffff",
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
    fontSize: FontSize.SMALL,
    fontWeight: FontWeight.BOLD,
    lineHeight: 16,
    textAlign: "center",
    color: "#363535"
})

export const TextButtonNOAct = styled.Text ({
    fontFamily: FontFamily.ARIAL,
    fontSize: FontSize.SMALL,
    fontWeight: FontWeight.BOLD,
    lineHeight: 19,
    textAlign: "center",
    opacity: 0.5,
    color: "#363535",
    backgroundColor: "#f0f2fa"
})

export const ButtonNOFilter = styled.TouchableOpacity({
    width: 108,
    height: 28,
    borderRadius: 9,
    backgroundColor: "#f0f2fa",
    justifyContent: "center",
})