import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TechnologyStore from './screens/TechnologyStore';
import Checkout from './screens/Checkout';
const Stack = createNativeStackNavigator();

let TechList = [
    {
      name: "Computer",
      price: 1000,
      key: 0,
      added: 0,
      inCart: false,
      description : "Home Desktop to help with any work and gaming needs",
    },
    {
      name: "UPhone",
      price: 800,
      key: 1,
      added: 0,
      inCart: false,
      description: "The newest phone model, optimized for messaging throughout the world"
    },
    {
      name: "Air Fryer",
      price: 600,
      key: 2,
      added: 0,
      inCart: false,
      description: "The best way to make French Fries and Chicken Nuggets"
    },
    {
      name: "UPad",
      price: 400,
      key: 3,
      added: 0,
      inCart: false,
      description: "All the power of a UPhone with no data plan"
    }
]
export const TechContext = React.createContext(TechList);

export default function App() {
  return (
    <TechContext.Provider value={TechList}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Technology" component={TechnologyStore}/>
        <Stack.Screen name="Checkout" component={Checkout}/>
      </Stack.Navigator>
    </NavigationContainer>
    </TechContext.Provider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  size: {
    width: 300,
    paddingTop: 5,
    paddingBottom: 10
  },
  card :{
    textAlign: 'left',
    fontSize: 18
  },
  padding: {
    padding: 10
  },
  checkout: {
    fontSize: 18
  }
});
