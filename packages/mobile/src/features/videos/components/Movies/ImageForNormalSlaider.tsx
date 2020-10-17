import * as React from 'react'
import { IVideosRespons } from '@project/common/src/videos/models'
import { NavigationName } from '../../../../config/routing/NavigationName'
import SmallSquareOfMovie from '../MainScreen/SmallSquareOfMovie'
import { ImageUtil } from './ImageUtils'
import { useNavigation } from '@react-navigation/native'

interface ImgeForNormalSlaiderP {
    item: IVideosRespons
}

export const ImgeForNormalSlaider = ({item}:ImgeForNormalSlaiderP) => {
    const navigation = useNavigation()

    const navToSingleMovie = () => {
        navigation.navigate(NavigationName.SINGLEMOVIE,
            {itemId: item.id})
    }
  
    return (<SmallSquareOfMovie 
      text= {item.title}
      onPress= {navToSingleMovie}
      image= {ImageUtil.getImageFromServer(item.urlPhoto)}
    />)
}