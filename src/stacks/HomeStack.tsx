import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "@/screens/home/Main";

const Stack = createNativeStackNavigator();

export default function ChattingStack() {
    return (
        <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={Main}/>
        </Stack.Navigator>
    )
}
