import React, {type PropsWithChildren} from 'react';
import { SafeAreaView } from 'react-native'

import SettlementStack from "@/stacks/SettlementStack";
import PublishStack from "@/stacks/PublishStack";
import ChattingStack from "@/stacks/ChattingStack";
import MenuStack from "@/stacks/MenuStack";
import HomeStack from "@/stacks/HomeStack";

import styled from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import SearchIcon from "@/assets/icons/tabNavi/search.svg";
import PublishIcon from "@/assets/icons/tabNavi/publish.svg";
import ChattingIcon from "@/assets/icons/tabNavi/chatting.svg";
import MenuIcon from "@/assets/icons/tabNavi/menu.svg";
import HomeIcon from "@/assets/icons/tabNavi/HomeIcon";
import colors from '@/assets/styles/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
          tabBarStyle: {
            height: 56,
          },
          tabBarItemStyle: {
            marginBottom: 5
          },
          headerShown: false,
          tabBarActiveTintColor: colors.black
        }}
      >
        <Tab.Screen 
          name="Settlement" 
          component={SettlementStack} 
          options={{
            title: "정산",
            tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
            tabBarIcon: ({ focused, color, size }) => (
              <SearchIcon color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Publish" 
          component={PublishStack} 
          options={{
            title: "출간",
            tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
            tabBarIcon: ({ focused, color, size }) => (
              <PublishIcon color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{
            title: "",
            tabBarIcon: ({ focused, color, size }) => (
              <HomeIcon />
            )
          }}
        />
        <Tab.Screen 
          name="Chatting" 
          component={ChattingStack} 
          options={{
            title: "채팅",
            tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
            tabBarIcon: ({ focused, color, size }) => (
              <ChattingIcon color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Menu" 
          component={MenuStack} 
          options={{
            title: "메뉴",
            tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
            tabBarIcon: ({ focused, color, size }) => (
              <MenuIcon color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

