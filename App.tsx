import React, {type PropsWithChildren} from 'react';
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

import Home from "@/screens/Home";
import Inquiry from "@/screens/Inquiry";
import Portfolio from "@/screens/Portfolio";
import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Inquiry" component={Inquiry} />
        <Tab.Screen name="Portfolio" component={Portfolio} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const StyledText = styled.Text`
  font-size: 18px;
`
