import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "@/screens/publish/Main";
import Make from "@/screens/publish/Make";
import Write from "@/screens/publish/Write";
import MyBook from "@/screens/publish/MyBook";
import Correction from "@/screens/publish/Correction";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

export default function PublishStack() {
    return (
        <SafeAreaProvider>
            <Stack.Navigator initialRouteName="Main" screenOptions={{ headerTitleAlign: "center", headerTitleStyle: { fontWeight: "700" }}}>
                <Stack.Screen name="Main" component={Main} options={{ title: "출간", headerShadowVisible: false }}/>
                <Stack.Screen name="Make" component={Make} options={{ title: "책 만들기", headerShadowVisible: false }}/>
                <Stack.Screen name="Write" component={Write} options={{ title: "글쓰기", headerShadowVisible: false }}/>
                <Stack.Screen name="MyBook" component={MyBook} options={{ title: "나의 책", headerShadowVisible: false }}/>
                <Stack.Screen name="Correction" component={Correction} options={{ title: "교정 교열", headerShadowVisible: false }}/>
            </Stack.Navigator>
        </SafeAreaProvider>
    )
}
