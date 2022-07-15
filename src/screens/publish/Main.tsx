import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import CText from "@/components/atoms/CustomText";
import colors from "@/assets/styles/colors";

export default function Main({ navigation }: any) {
    return (
        <View>
            <CustomText fontWeight="400">===== 100 =====</CustomText>
            <CustomText fontWeight="100">Hello 안녕</CustomText>
            <FontText fontWeight="100">Hello 안녕</FontText>

            <CustomText fontWeight="400">===== 200 =====</CustomText>
            <CustomText fontWeight="200">Hello 안녕</CustomText>
            <FontText fontWeight="200">Hello 안녕</FontText>

            <CustomText fontWeight="400">===== 300 =====</CustomText>
            <CustomText fontWeight="300">Hello 안녕</CustomText>
            <FontText fontWeight="300">Hello 안녕</FontText>

            <CustomText fontWeight="400">===== 400 =====</CustomText>
            <CustomText fontWeight="400">Hello 안녕</CustomText>
            <FontText fontWeight="400">Hello 안녕</FontText>

            <CustomText fontWeight="400">===== 500 =====</CustomText>
            <CustomText fontWeight="500">Hello 안녕</CustomText>
            <FontText fontWeight="500">Hello 안녕</FontText>

            <CustomText fontWeight="400">===== 600 =====</CustomText>
            <CustomText fontWeight="600">Hello 안녕</CustomText>
            <FontText fontWeight="600">Hello 안녕</FontText>

            <CustomText fontWeight="400">===== 700 =====</CustomText>
            <CustomText fontWeight="700">Hello 안녕</CustomText>
            <FontText fontWeight="700">Hello 안녕</FontText>

            <CustomText fontWeight="400">===== 800 =====</CustomText>
            <CustomText fontWeight="800">Hello 안녕</CustomText>
            <FontText fontWeight="800">Hello 안녕</FontText>


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

const CustomText = styled.Text<{ fontWeight: string; }>`
    font-size: 20px;
    font-weight: ${({ fontWeight }: any) => fontWeight};
`

const FontText = styled(CText)`
    // color: ${colors.blue500};
    font-size: 20px;
`