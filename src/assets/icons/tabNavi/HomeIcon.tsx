import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Home from "./home.svg";
import colors from "@/assets/styles/colors";

export default function HomeIcon() {
    return (
        <Container>
            <Home />
            <StyledText>홈</StyledText>
        </Container>
    )   
}

const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: ${colors.blue400};
    margin-bottom: 10px;
    border-radius: 50px;
    padding-top: 4px;
`

const StyledText = styled.Text`
    color: #fff;
    font-size: 12px;
    font-weight: 600
    margin-top: 2px;
`