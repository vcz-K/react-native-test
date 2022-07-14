import React from "react";
import styled from "styled-components/native";

export default function SalesContainer() {
    return (
        <Container>
            <YesterdayWrapper>
                <YesterdayTextWrapper>
                    <Text1></Text1>
                    <Text2></Text2>
                </YesterdayTextWrapper>
            </YesterdayWrapper>
        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    height: 270px;
    padding: 0 20px;
`

const YesterdayWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 90px;
`

const YesterdayTextWrapper = styled.View`

`

const Text1 = styled.Text`

`

const Text2 = styled.Text`

`