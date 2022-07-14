import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "@/screens/home/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function ChattingStack() {
    return (
        <SafeAreaProvider>
            <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Main" component={Main}/>
            </Stack.Navigator>
        </SafeAreaProvider>
    )
}
