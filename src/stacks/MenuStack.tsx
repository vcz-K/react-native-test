import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "@/screens/menu/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function ChattingStack() {
    return (
        <SafeAreaProvider>
            <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleAlign: "center", headerTitleStyle: { fontWeight: "700" }}}>
                <Stack.Screen name="Main" component={Main} options={{ title: "메뉴" }}/>
            </Stack.Navigator>
        </SafeAreaProvider>
    )
}
