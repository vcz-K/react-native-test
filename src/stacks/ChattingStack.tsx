import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "@/screens/chatting/Main";
import Room from "@/screens/chatting/Room";

const Stack = createNativeStackNavigator();

export default function ChattingStack() {
    return (
        <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleAlign: "center", headerTitleStyle: { fontWeight: "700" }}}>
            <Stack.Screen name="Main" component={Main} options={{ title: "채팅" }}/>
            <Stack.Screen name="Room" component={Room} options={{ title: "채팅방 이름" }}/>
        </Stack.Navigator>
    )
}
