// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screen/MainScreen';
import Bai1Screen from './screen/Bai1Screen';
import Bai2Screen from './screen/Bai2Screen';
import Bai3Screen from './screen/Bai3Screen';
import Bai4Screen from './screen/Bai4Screen';
import Bai5Screen from './screen/Bai5Screen';
import Bai6Screen from './screen/Bai6Screen';
import Bai7Screen from './screen/Bai7Screen';
import Bai8Screen from './screen/Bai8Screen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator inititalRouteName ='Main' screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Màn hình chính' }}/>
        <Stack.Screen name="Bai1" component={Bai1Screen} options={{ title: 'Bài 1' }}/>
        <Stack.Screen name="Bai2" component={Bai2Screen} options={{ title: 'Bài 2' }}/>
        <Stack.Screen name="Bai3" component={Bai3Screen} options={{ title: 'Bài 3' }}/>
        <Stack.Screen name="Bai4" component={Bai4Screen} options={{ title: 'Bài 4' }}/>
        <Stack.Screen name="Bai5" component={Bai5Screen} options={{ title: 'Bài 5' }}/>
        <Stack.Screen name="Bai6" component={Bai6Screen} options={{ title: 'Bài 6' }}/>
        <Stack.Screen name="Bai7" component={Bai7Screen} options={{ title: 'Bài 7' }}/>
        <Stack.Screen name="Bai8" component={Bai8Screen} options={{ title: 'Bài 8' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;