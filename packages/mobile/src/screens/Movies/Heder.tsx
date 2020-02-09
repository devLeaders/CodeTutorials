import * as React from 'react';
import { TextInput, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Hamburger, FilterList, Search, Arrow } from './MovieListStyle';

type HederS = {
    text: string
}

export class  Heder extends React.Component<any,HederS>{
  static navigationOptions = ({ navigation }:any) => {
    return {
      headerStyle: {
        backgroundColor: '#f0f2fa',
      },
      headerTitle: () => 
        <FilterList>
          Movies in Bengaluru
          <Arrow source={{uri:"ic_arrow_down"}}/>
        </FilterList>,
      headerLeft: () => (
          <TouchableOpacity >
            <Hamburger source={{uri:'ic_menu'}}/>
          </TouchableOpacity> 
      ),
      headerRight: () => (
        <TouchableOpacity >
          <Search source={{uri:'ic_search'}}/>
        </TouchableOpacity> 
    ),
    };
  };

    constructor(props:any){
		super(props);
		this.state = {
			text: ''
        }
        this.onChangeText = this.onChangeText.bind(this);
    }

    public onChangeText(e:any){
        this.setState({text: e.target.value})
    }
   

  render(){
    return (
        <View> 
            
            
        </View>
    );
  }
}

export default Heder;