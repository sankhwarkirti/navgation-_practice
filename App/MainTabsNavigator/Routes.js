import * as React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createDrawerNavigator } from '@react-navigation/drawer';

//import Home from './BottomTabsNavigator/Home';
import Profile from '../BottomTabsNavigator/Profile';
import Details from '../BottomTabsNavigator/Details';
//import HomeDetails from './DrawerTabsNavigator/HomeDetails';
//import Logout from './DrawerTabsNavigator/Logout';
//import Settings from './DrawerTabsNavigator/Settings';
//import LogIn from './MainTabsNavigator/LogIn';
//import MyHome from './MainTabsNavigator/MyHome';

const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();
//const Stack = createStackNavigator();

function Routes() {
  return (
   
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>,

      {/*
         <NavigationContainer>
         <Drawer.Navigator >
        <Drawer.Screen name="Home" component={HomeDetails} />
        <Drawer.Screen name="Logout" component={Logout} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>

     <Stack.Navigator>
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="MyHome" component={MyHome} />
     </Stack.Navigator>
    </NavigationContainer>*/}

    
  );

}

export default Routes;