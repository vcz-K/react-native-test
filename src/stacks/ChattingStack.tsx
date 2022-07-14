import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "@/screens/chatting/Main";
import Room from "@/screens/chatting/Room";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function ChattingStack() {
    return (
        <SafeAreaProvider>
            <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleAlign: "center", headerTitleStyle: { fontWeight: "700" }}}>
                <Stack.Screen name="Main" component={Main} options={{ title: "채팅", headerShadowVisible: false }}/>
                <Stack.Screen name="Room" component={Room} options={{ title: "채팅방 이름", headerShadowVisible: false }}/>
            </Stack.Navigator>
        </SafeAreaProvider>
    )
}
