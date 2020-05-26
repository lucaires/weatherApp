import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchScreen from './components/SearchScreen'
import HomeScreen from './components/HomeScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f4f4" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName
              if (route.name === 'home') {
                iconName = 'home-city-outline'
              } else if (route.name === 'search') {
                iconName = 'city'
              }
              return <MaterialCommunityIcons name={iconName} size={25} color={color} />
            },
          })}
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#6200ee',
            inactiveBackgroundColor: '#6200ee',
          }}
        >
          <Tab.Screen name="home" component={HomeScreen} />
          <Tab.Screen name="search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
