import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import News from './News';
import axios from 'axios';

class AxiosExample extends Component{
  constructor(props){
		super(props);
		this.state = {
			news: []
		}
	}
	componentDidMount() {
    axios.get('https://newsapi.org/v2/everything?q=netflix&sortBy=publishedAt&apiKey=c04fd04b98d841d9ac3f0826f2497094')
			.then(res => {
				this.setState({ news: res.data.articles });
			})
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollView >
          {
            this.state.news.map((items, Id) =>
              <News key={Id} data={items} />
            )
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
		//
	}
})

export default AxiosExample;