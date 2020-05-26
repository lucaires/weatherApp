import React from 'react'
import { StyleSheet, Text, View, Alert, Image } from 'react-native'
import MyHeader from './MyHeader'
import { Card, Title } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'

//api url => http://api.openweathermap.org/data/2.5/weather?q=${city name}&appid={your api key}

//my key => 7527cc317ce466c78d82516bbc6fee3b

export default class HomeScreen extends React.Component {
  state = {
    info: {
      name: 'loading',
      temp: 'loading',
      humidity: 'loading',
      desc: 'loading',
      icon: 'loading',
    },
  }

  getWeather() {
    //Mycity = this.props.navigation.getParam('city','rio de janeiro')
    Mycity = 'Rio de Janeiro'
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${Mycity}&units=metric&appid=7527cc317ce466c78d82516bbc6fee3b`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        this.setState({
          info: {
            name: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity,
            desc: data.weather[0].description,
            icon: data.weather[0].icon,
          },
        })
        //console.log(this.state.info)
      })
      .catch((err) => {
        Alert.alert('Error' + err.mensage + 'por favor, conecte-se a internet', [{ text: 'ok' }])
      })
  }

  componentDidMount() {
    this.getWeather()
  }

  render() {
    return (
      <View style={styles.container}>
        <MyHeader title="clima atual" />
        <Card style={{ margin: 20 }}>
          <LinearGradient colors={['#6200ee', '#9B49c1']}>
            <View style={{ borderRadius: 10, padding: 30, alignItems: 'center' }}>
              <Title style={styles.text}>{this.state.info.name}</Title>
              <Image
                style={{ width: 120, height: 120 }}
                source={{ uri: 'http://openweathermap.org/img/w/' + this.state.info.icon + '.png' }}
              />
              <Title style={styles.text}>Temperatura: {this.state.info.temp} º</Title>
              <Title style={styles.text}>{this.state.info.desc}</Title>
              <Title style={styles.text}>Umidade: {this.state.info.humidity}</Title>
            </View>
          </LinearGradient>
        </Card>
        <Text>I am on home screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
})
