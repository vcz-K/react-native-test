import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "@/screens/settlement/Main";
import Dashboard from "@/screens/settlement/Dashboard";
import Inquiry from "@/screens/settlement/Inquiry";
import Statement from "@/screens/settlement/Statement";
import Portfolio from "@/screens/settlement/Portfolio";
import TwoDepth from "@/screens/settlement/TwoDepth";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigationState } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function SettlementStack({ navigation, route } : any) {
    const state = useNavigationState(state => state);
    // const routeIdx = state.routeNames.findIndex(r => r === "Settlement");
    // if (state.routes[routeIdx]) {
    //     const depth = state.routes[routeIdx].state?.index || 0;
    //     if (depth > 0) { // 탭의 메인화면이 아니면 하단 네비게이션 탭 숨기기
    //         console.log("들어옴!!!!")
    //         navigation.setOptions({
    //             tabBarStyle: { displat: "none" }
    //         })
    //     }
    // }

    useEffect(() => {
        const routeIdx = state.routeNames.findIndex(r => r === "Settlement");
        if (state.routes[routeIdx]) {
            const depth = state.routes[routeIdx].state?.index || 0;
            if (depth > 0) { // 탭의 메인화면이 아니면 하단 네비게이션 탭 숨기기
                navigation.setOptions({
                    tabBarStyle: { display: "none" }
                })
            } else {
                navigation.setOptions({
                    tabBarStyle: { display: "flex" }
                })
            }
        }
    }, [state])
    return (
        <SafeAreaProvider>
            <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleAlign: "center", headerTitleStyle: { fontWeight: "700" }}}>
                <Stack.Screen name="Main" component={Main} options={{ title: "정산", headerShadowVisible: false }}/>
                <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: "대시보드", headerShadowVisible: false }}/>
                <Stack.Screen name="Inquiry" component={Inquiry} options={{ title: "정산 조회", headerShadowVisible: false }}/>
                <Stack.Screen name="Statement" component={Statement} options={{ title: "정산서", headerShadowVisible: false }}/>
                <Stack.Screen name="Portfolio" component={Portfolio} options={{ title: "포트폴리오", headerShadowVisible: false }}/>
                <Stack.Screen name="TwoDepth" component={TwoDepth} options={{ title: "두번째 Depth", headerShadowVisible: false }}/>
            </Stack.Navigator>
        </SafeAreaProvider>
    )
}
