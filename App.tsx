/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import 'react-native-gesture-handler';

import { NavigatorScreenParams } from '@react-navigation/native';

import {
  Search,
  MenuScreen,
  FavoriteScreen,
  DescriptionScreen,
  AddMealScreen
} from "./src/screens"
import {colors} from "./src/constants"
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Provider} from "react-redux";
import {store} from "./src/redux/store";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyTabs(){
  return <Tab.Navigator
  initialRouteName='Search'
  screenOptions={{
    tabBarActiveTintColor: colors.green
  }}
  >
    <Tab.Screen
      name='Search'
      component={Search}
      options={{
        headerShown:false,
        tabBarLabel: 'Tìm kiếm',
        tabBarIcon: ({color, size})=>(<Icon name='search' size={size}/>)

      }}
    />
    <Tab.Screen
      name='Favorite'
      component={FavoriteScreen}
      options={{
        headerShown:false,
        tabBarLabel: 'Yêu thích',
        tabBarIcon: ({color, size})=>(<Icon name='heart' size={size}/>)

      }}
    />
    <Tab.Screen
      name='Menu'
      component={MenuScreen}
      options={{
        tabBarLabel: 'Thực đơn',
        headerShown:false,
        tabBarIcon: ({color, size})=>(<Icon name='bars' size={size}/>)
      }}
    />


  </Tab.Navigator>
}

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}> 
      <Stack.Screen name="Tabs" component={MyTabs} />
      <Stack.Screen name="DescriptionScreen" component={DescriptionScreen} />
      <Stack.Screen name="AddMealScreen" component={AddMealScreen} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export type RootStackParamList = {
  SearchScreen: NavigatorScreenParams<'SearchScreen'>;
  DescriptionScreen: {data:any};
  AddMealScreen: undefined
}

export type ParamList = {
  DescriptionScreen: {
    data: any;
  };
};

export default function App(){
  return (
    <Provider store={store}>
      <NavigationContainer > 
        <MyStack/>
      </NavigationContainer>
    </Provider>
  );
};
