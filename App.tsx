import React, { type PropsWithChildren } from 'react';

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
import HomeIcon from "@/assets/icons/tabNavi/home.svg";
import colors from '@/assets/styles/colors';

const Tab = createBottomTabNavigator();

const getVisibility = (navigation: any, r: any) => {
	const state = navigation.getState();
	// console.log(state);
	// console.log(r);

	if (state.index > 0) {
		return { display: "none" };
	}
	return { display: "flex" };
	// if (!route.state) return true;
	// let index = route.state.index;
	// if (index === selectedIndex) {
	// 	return false;
	// }
	// return true;
};

export default function App() {
	// const insets = useSafeAreaInsets();

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName='Home'
				screenOptions={{
					tabBarStyle: { // 하단 탭 스타일
						// height: 60,
						borderTopColor: colors.gray300,
						borderTopWidth: 3,
						// elevation: 6,
						// shadowColor: "gray",
						// shadowOffset: {
						//   width: 5,
						//   height: 5
						// },
						// shadowOpacity: 0.9
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
					name="Home"
					component={HomeStack}
					options={{
						title: "홈",
						tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
						tabBarIcon: ({ focused, color, size }) => (
							<HomeIcon color={color} />
						)
					}}
				/>
				<Tab.Screen
					name="Settlement"
					component={SettlementStack}
					options={{
					  title: "정산",
					  tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
					  tabBarIcon: ({ focused, color, size }) => (
					    <SearchIcon color={color} />
					  ),
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
				{/* <Tab.Screen
					name="Home"
					component={HomeStack}
					options={{
						title: "",
						tabBarIcon: ({ focused, color, size }) => (
							<HomeIcon />
						)
					}}
				/> */}
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

