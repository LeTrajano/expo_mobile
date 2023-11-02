import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './componentes/Home.js';
import Eu from './componentes/Eu.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" componentes={Home} />
        <Stack.Screen name="Curriculo" componentes={Eu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;