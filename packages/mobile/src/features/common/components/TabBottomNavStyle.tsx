import styled from 'styled-components/native';
import { MyText } from '../styles/MyText';
import { Color } from '../styles/constans/Color';
import { FontWeight } from '../styles/constans/FontWeight';


export const HamburgerIc = styled.Image({
    width:24,
    height:20
})

export const TeamIc = styled.Image({
    width:26, 
    height:26
})

export const TasksIc = styled.Image({
    width:26, 
    height:26
})

export const PlayListIc = styled.Image({
    width:26, 
    height:26
})

export const AlertV = styled.View({
    position:"relative"
})

export const AlertIc = styled.Image({
    width:21,
    height:26
}) 

export const AlertView = styled.View({
    borderWidth:2, 
    width:18, 
    height:19, 
    borderRadius: 18/2, 
    borderColor: Color.WHITE,
    position:"absolute", 
    right:0, 
    top:-2, 
    left:12, 
    backgroundColor: Color.BLACK
})

export const AlertText = styled(MyText)({
    fontSize: 10, 
    color: Color.WHITE, 
    fontWeight: FontWeight.BOLD, 
    textAlign: "center"
})

export const SearchWIc = styled.Image({
    width:24, 
    height:24
})