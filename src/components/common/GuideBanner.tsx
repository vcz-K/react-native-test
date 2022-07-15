import React from "react";
import styled from "styled-components/native";
import { View, Dimensions } from "react-native";
import BannerIcon from "@/assets/icons/home/banner.svg";
import colors from "@/assets/styles/colors";

const deviceWidth = Dimensions.get("window").width;

export default function GuideBanner() {
    return (
        <BannerWrapper deviceWidth={deviceWidth}>
            <View>
                <Text1>글링을 처음으로 사용한다면?</Text1>
                <Text2>글링 이용 가이드</Text2>
            </View>
            <BannerIconWrapper>
                <BannerIcon />
            </BannerIconWrapper>
        </BannerWrapper>
    )
}

const BannerWrapper = styled.View<{ deviceWidth: number; }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 140px;
    background-color: ${colors.blue50};
    padding: 0 20px;
`

const BannerIconWrapper = styled.View`
    width: 124px;
`

const Text1 = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray600};
    margin-bottom: 4px;
`

const Text2 = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: ${colors.black};
`