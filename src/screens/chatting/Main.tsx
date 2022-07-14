import React from "react";
import { View, Text, Button } from "react-native";

export default function Main({ navigation }: any) {
    return (
        <View>
            <Button 
                title="채팅방으로"
                onPress={() => navigation.navigate("Room")}
            />
        </View>
    )
}