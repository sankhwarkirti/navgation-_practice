import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


//import Home from './BottomTabsNavigator/Home';
//import Profile from './BottomTabsNavigator/Profile';
//import Details from './BottomTabsNavigator/Details';
import Logout from '../DrawerTabsNavigator/Logout';
import Settings from '../DrawerTabsNavigator/Settings';
import Routes from './Routes';

//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function navigation() {
    return (
     {/* <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
         <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Details" component={Details} />
    </Tab.Navigator>
   </NavigationContainer>
  */},
  
        <Drawer.Navigator initialRouteName="Settings">
          <Drawer.Screen name="Logout" component={Logout} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
       
  );

}

export default navigation;  