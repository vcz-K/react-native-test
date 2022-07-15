import colors from "@/assets/styles/colors";
import React, { useState } from "react";
import { View } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import styled from "styled-components/native";
import SalesIcon from "@/assets/icons/settlement/sales.svg";

export default function SalesContainer() {
    const [withTax, setWithTax] = useState(true);

    return (
        <Container>
            {/* 어제 판매금액 */}
            <YesterdayWrapper>
                <View>
                    <Text1>어제 판매금액</Text1>
                    <Text2>21,500원</Text2>
                </View>
                <View>
                    <SalesIcon />
                </View>
            </YesterdayWrapper>

            {/* 주간 누계 */}
            <WeeklyWrapper>
                <View>
                    <Text3>주간 누계</Text3>
                    <Text4>2021.12.24~2022.01.01</Text4>
                </View>
                <View>
                    <Text3>49,700원</Text3>
                </View>
            </WeeklyWrapper>

            {/* 누적 매출 */}
            <AccumulateWrapper>
                <Text3>누적 매출</Text3>
                <Text3>3,236,755원</Text3>
            </AccumulateWrapper>

            {/* 지난달 총 정산금 */}
            <LastMonthWrapper>
                <View>
                    <Text3>지난달 총 정산금</Text3>
                    <TaxWrapper>
                        <StyledCheckBox 
                            value={withTax}
                            onValueChange={setWithTax}
                            tintColors={{ true: colors.blue500, false: colors.gray500}}
                            tintColor={colors.blue500}
                            boxType="square"
                        />
                        <Text5>세액 공제</Text5>
                    </TaxWrapper>
                </View>
                <Text3>200,436원</Text3>
            </LastMonthWrapper>
        </Container>
    )
}

const BaseWrapper = styled.View<{ height?: string; }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const Container = styled.View`
    width: 100%;
    height: 270px;
    padding: 0 20px;
`

const YesterdayWrapper = styled(BaseWrapper)`
    height: 90px;
`

const Text1 = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: ${colors.gray600};
    margin-bottom: 8px;
`

const Text2 = styled.Text`
    font-size: 24px;
    font-weight: 700;
    color: ${colors.black};
`

const WeeklyWrapper = styled(BaseWrapper)`
    height: 60px;
`

const Text3 = styled.Text`
    font-size: 16px;
    font-weight: 700
    color: ${colors.black}
`

const Text4 = styled.Text<{ marginTop: string; }>`
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray600};
    margin-top: 4px;
`

const AccumulateWrapper = styled(BaseWrapper)`
    height: 60px;
`

const LastMonthWrapper = styled(BaseWrapper)`
    height: 60px;
`

const TaxWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 21px;
`

const StyledCheckBox = styled(CheckBox)`
    position: relative;
    left: -8px;
`

const Text5 = styled.Text`
    position: relative;
    left: -8px;
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray600};
`