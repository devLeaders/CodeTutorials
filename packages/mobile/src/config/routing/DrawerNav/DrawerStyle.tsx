import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Color } from '../../../features/common/styles/constans/Color';
import { MyText } from '../../../features/common/styles/MyText';
import { FontSize } from '../../../features/common/styles/constans/FontSize';
import { FontWeight } from '../../../features/common/styles/constans/FontWeight';
import { getShadowStyle } from '../../../features/common/styles/constans/ShadowStyle'
export const Wrapper = styled.TouchableOpacity({
    flex: 1,
});

export const ButtonDraw = styled.TouchableOpacity({
    marginBottom: 25,
    height: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    borderColor: Color.LIGHTGREYX,
    backgroundColor: Color.WHITE,
    ...getShadowStyle(3, Color.LIGHTGREYX,1),
  });

  export const TextButton = styled(MyText)({
    fontSize: FontSize.NORMAL,
    fontWeight: parseInt(FontWeight.BOLD, 10),
    color: Color.BLACK,
  });

  export const IcDraw = styled.Image({
    width: 26,
    height: 26,
    marginRight: 9,
    marginLeft: 19
  });
  
  export const DrawerWraper = styled.View({
    flex: 1,
    marginLeft: 15,
    marginTop: 19,
    marginRight: 16
  });

  export const TitleProfile = styled(MyText)({
    fontSize: FontSize.BIGXS,
    fontWeight: parseInt(FontWeight.BOLD, 10),
    color: Color.BLACK,
    marginBottom: 15
  })

  export const ProfileImage = styled.Image({
    resizeMode: 'cover',
    borderRadius: 100,
    width: 99,
    height: 99,
    marginRight: 20,
    flex:0.5,
  })

  export const ProfileName = styled(MyText)({
    fontSize: FontSize.MIDIUMXS,
    fontWeight: parseInt(FontWeight.SEMIBOLD, 10),
    color: Color.BLACK,
    marginBottom: 4
  })

  export const ProfileMail = styled(MyText)({
    fontSize: FontSize.NORMALXS,
    fontWeight: parseInt(FontWeight.REGULAR, 10),
    color: Color.BLACK,
    marginBottom: 3
  })

  export const ProfileUser = styled(MyText)({
    fontSize: FontSize.SMALLXX,
    fontWeight: parseInt(FontWeight.SEMIBOLD, 10),
    color: Color.BLACK,
  })

  export const LogOut = styled.TouchableOpacity({
    height: 21,
    width: '78%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Color.LIGHTGREYX,
    backgroundColor: Color.WHITE,
   ...getShadowStyle(3, Color.LIGHTGREYX,1),
  });

  export const ProfileLogout = styled(MyText)({
    fontSize: FontSize.SMALLXX,
    fontWeight: parseInt(FontWeight.REGULAR, 10),
    color: Color.BLACK,
    marginLeft: 10
  })

  export const LogOutIc = styled.Image({
    width: 15,
    height: 12,
    marginLeft: 9,
    resizeMode: 'cover',

  })

  export const WrapWidth = styled.View({
    width:'95%'
  })

  export const ProfileWrap = styled.View({
    flex:1, 
    marginBottom:51,
    flexDirection: 'row',
    marginTop: 15
  })

  export const ProfileWrapButton = styled.View({
    flex:0.5,
  })

  export const LogoutWrap = styled.View({
    marginTop: 18,
    alignItems:'flex-end'
  })

  export const WrapInfo = styled.View({
    justifyContent:'center',
     marginTop:10
  })
