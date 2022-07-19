import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";

export default function Dashboard({ navigation }: any) {
    // const state = navigation.getState();
    // console.log("Dashboard state", state);
    return (
        <DashboardScreen>
            <Text>Settlemet 대시보드 페이지!</Text>
            <Button
                title="두번째 스크린으로"
                onPress={() => navigation.navigate("TwoDepth")}
            />
        </DashboardScreen>
    )
}

const DashboardScreen = styled.ScrollView`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
`