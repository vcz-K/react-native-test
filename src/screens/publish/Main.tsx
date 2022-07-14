import React from "react";
import { View, Text, Button } from "react-native";

export default function Main({ navigation }: any) {
    return (
        <View>
            <Text>출간 메인 페이지!</Text>
            <Button 
                title="Go 책만들기"
                onPress={() => navigation.navigate("Make")}
            />
            <Button 
                title="Go 글쓰기"
                onPress={() => navigation.navigate("Write")}
            />
            <Button 
                title="Go 나의 책"
                onPress={() => navigation.navigate("MyBook")}
            />
            <Button 
                title="Go 교정 교열"
                onPress={() => navigation.navigate("Correction")}
            />
        </View>
    )
}