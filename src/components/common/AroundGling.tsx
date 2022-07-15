import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import colors from "@/assets/styles/colors";

import AroundDashboardIcon from "@/assets/icons/home/aroundDashboard.svg";

export default function AroundGling() {
    return (
        <AroundGlingContainer>
            <SubTitleText>글링 기능 둘러보기</SubTitleText>
            <AroundGlingWrapper horizontal={true}>
                <AroundCardWrapper>
                    <View>
                        <Text9>글링 정산</Text9>
                        <Text10>내 데이터 분석,</Text10>
                        <Text11>대시보드</Text11>
                    </View>
                    <AroundDashboardIcon />
                </AroundCardWrapper>
                <AroundCardWrapper>
                    <View>
                        <Text9>글링 정산</Text9>
                        <Text10>한 눈에 보는,</Text10>
                        <Text11>정산 조회</Text11>
                    </View>
                    <AroundDashboardIcon />
                </AroundCardWrapper>
            </AroundGlingWrapper>
        </AroundGlingContainer>
    )
}

const SubTitleText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: ${colors.black};
    height: 44px;
    padding: 12px 0;
`

const AroundGlingContainer = styled.View`
    width: 100%;
    padding-left: 20px;
    margin-bottom : 40px;
`

const AroundGlingWrapper = styled.ScrollView`
    width: 100%;
    height: 140px;
`

const AroundCardWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 240px;
    height: 100%;
    border: 1px solid ${colors.gray300};
    padding: 16px 20px;
    border-radius: 8px;
    margin-right: 8px;
`

const Text9 = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray600};
    margin-bottom: 8px;
`

const Text10 = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: ${colors.black};
`

const Text11 = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: ${colors.blue500};
`