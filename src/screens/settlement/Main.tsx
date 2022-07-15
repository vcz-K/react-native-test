import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import SalesContainer from "@/components/settlement/SalesContainer";
import styled from "styled-components/native";
import colors from "@/assets/styles/colors";
import GuideBanner from "@/components/common/GuideBanner";
import AroundGling from "@/components/common/AroundGling";

import DashboardIcon from "@/assets/icons/home/dashboard.svg";
import InquiryIcon from "@/assets/icons/home/inquiry.svg";
import StatementIcon from "@/assets/icons/home/statement.svg";
import PortfolioIcon from "@/assets/icons/home/portfolio.svg";

const navIconList = [
    { icon: <DashboardIcon />, label: "대시보드", to: "Dashboard" },
    { icon: <InquiryIcon />, label: "정산 조회", to: "Inquiry" },
    { icon: <StatementIcon />, label: "정산서", to: "Statement" },
    { icon: <PortfolioIcon />, label: "포트폴리오", to: "Portfolio" },
]

const deviceWidth = Dimensions.get("window").width;
const gap = (deviceWidth - 240 - 40) / 3;

export default function Main({ navigation }: any) {
    return (
        <SafeAreaContainer>
            <MainContainer>
                <SalesContainer />

                <NavIconContainer>
                    {navIconList.map((n, idx) => (
                        <NavIconWrapper gap={(idx + 1) % 4 !== 0 ? gap : 0} key={idx}>
                            <StyledTouchableOpacity onPress={() => navigation.navigate(n.to)}>
                                {n.icon}
                                <NavIconLabel>{n.label}</NavIconLabel>
                            </StyledTouchableOpacity>
                        </NavIconWrapper>
                    ))}
                </NavIconContainer>

                <GuideBanner />

                <AroundGling />
            </MainContainer>
        </SafeAreaContainer>
    )
}

const SafeAreaContainer = styled.SafeAreaView`
    background-color: ${colors.white};
`

const MainContainer = styled.ScrollView`
    background-color: ${colors.white};
`

const NavIconContainer = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 80px;
    padding: 0 20px;
    margin: 24px 0;
`

const NavIconWrapper = styled.View<{gap: number}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 80px;
    margin-right: ${({ gap }: any) => `${gap}px`};
    margin-bottom: 16px;
`

const StyledTouchableOpacity = styled(TouchableOpacity)`
    width: 100%;
`

const NavIconLabel = styled.Text`
    font-size: 12px;
    font-weight: 700;
    color: ${colors.black};
    width: 100%;
    text-align: center;
`