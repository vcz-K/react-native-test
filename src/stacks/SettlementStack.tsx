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
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function SettlementStack({ navigation, route } : any) {
    const state = useNavigationState(state => state);

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

    const navigate = (to: string) => {
        return(
            <Button onPress={() => navigation.navigate(to)} title="뒤로가기"/>
        )
    }
    
    return (
        <SafeAreaProvider>
            <Stack.Navigator initialRouteName="StMain" screenOptions={{ headerTitleAlign: "center", headerTitleStyle: { fontWeight: "700" }}}>
                <Stack.Screen name="StMain" component={Main} options={{ title: "정산", headerShadowVisible: false }}/>
                <Stack.Screen name="StDashboard" component={Dashboard} options={{ title: "대시보드", headerShadowVisible: false, headerLeft: () => navigate("StMain") }}/>
                <Stack.Screen name="StInquiry" component={Inquiry} options={{ title: "정산 조회", headerShadowVisible: false, headerLeft: () => navigate("StMain") }}/>
                <Stack.Screen name="StStatement" component={Statement} options={{ title: "정산서", headerShadowVisible: false, headerLeft: () => navigate("StMain") }}/>
                <Stack.Screen name="StPortfolio" component={Portfolio} options={{ title: "포트폴리오", headerShadowVisible: false, headerLeft: () => navigate("StMain") }}/>
                <Stack.Screen name="TwoDepth" component={TwoDepth} options={{ title: "두번째 Depth", headerShadowVisible: false, headerLeft: () => navigate("StDashboard") }}/>
            </Stack.Navigator>
        </SafeAreaProvider>
    )
}
