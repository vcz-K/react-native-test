import React, {type PropsWithChildren} from 'react';
import { useSafeAreaInsets, SafeAreaProvider } from "react-native-safe-area-context";

import SettlementStack from "@/stacks/SettlementStack";
import PublishStack from "@/stacks/PublishStack";
import ChattingStack from "@/stacks/ChattingStack";
import MenuStack from "@/stacks/MenuStack";
import HomeStack from "@/stacks/HomeStack";

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
  // const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName='Home'
          screenOptions={{
            tabBarStyle: { // 하단 탭 스타일
              // height: 60,
            },
            tabBarItemStyle: { // 하단 탭 각각의 아이템 스타일
              // marginBottom: 6,
            },
            headerShown: false, // 상단에 현재 탭 name 표시 여부
            tabBarActiveTintColor: colors.black, // active인 탭 color
            // tabBarHideOnKeyboard: true // 키보드가 나타날때 하단탭을 가릴지 여부 
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
    </SafeAreaProvider>
  );
};

