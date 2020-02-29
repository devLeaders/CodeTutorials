import styled from 'styled-components/native';
import {FontSize} from '../../variables/FontSize';
import {FontWeight} from '../../variables/FontWeight';
import {FontFamily} from '../../variables/FontFamily';
import {Color} from '../../variables/Color';


export const Wrapper = styled.View({
  flex: 1,  
  backgroundColor: Color.PALE_GREY,
  alignItems: 'center',
  justifyContent: 'center',
});

export const EmailView = styled.View({
  marginHorizontal: 20, 
  marginVertical: 5,
});

export const EmailText = styled.Text({
  marginBottom: 3, 
});


