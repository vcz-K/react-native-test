import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "@/screens/settlement/Main";
import Dashboard from "@/screens/settlement/Dashboard";
import Inquiry from "@/screens/settlement/Inquiry";
import Statement from "@/screens/settlement/Statement";
import Portfolio from "@/screens/settlement/Portfolio";

const Stack = createNativeStackNavigator();

export default function SettlementStack() {
    return (
        <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleAlign: "center", headerTitleStyle: { fontWeight: "700" }}}>
            <Stack.Screen name="Main" component={Main} options={{ title: "정산" }}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: "대시보드" }}/>
            <Stack.Screen name="Inquiry" component={Inquiry} options={{ title: "정산 조회" }}/>
            <Stack.Screen name="Statement" component={Statement} options={{ title: "정산서" }}/>
            <Stack.Screen name="Portfolio" component={Portfolio} options={{ title: "포트폴리오" }}/>
        </Stack.Navigator>
    )
}
