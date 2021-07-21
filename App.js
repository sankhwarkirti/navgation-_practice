import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Routes from "./App/MainTabsNavigator/Routes";
import LogIn from './App/LogIn';
import MyHome from './App/MyHome';
import navigation from './App/MainTabsNavigator/navigation';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Routes">
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="MyHome" component={MyHome} />
        <Stack.Screen name="Routes" component={Routes} />
        <Stack.Screen name="navigation" component={navigation} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;