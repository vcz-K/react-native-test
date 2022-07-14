import React from "react";
import { View, Text, Button } from "react-native";

export default function Main({ navigation }: any) {
    return (
        <View>
            <Text>Settlement 메인 페이지!</Text>
            <Button 
                title="Go 대시보드"
                onPress={() => navigation.navigate("Dashboard")}
            />
            <Button 
                title="Go 정산조회"
                onPress={() => navigation.navigate("Inquiry")}
            />
            <Button 
                title="Go 정산서"
                onPress={() => navigation.navigate("Statement")}
            />
            <Button 
                title="Go 포트폴리오"
                onPress={() => navigation.navigate("Portfolio")}
            />
        </View>
    )
}