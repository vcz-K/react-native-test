import React from "react";
import { View, Text, Button } from "react-native";
import SalesContainer from "@/components/settlement/SalesContainer";
import styled from "styled-components/native";
import colors from "@/assets/styles/colors";

export default function Main({ navigation }: any) {
    return (
        <MainContainer>
            <SalesContainer />
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
        </MainContainer>
    )
}

const MainContainer = styled.View`
    background-color: ${colors.white};
`