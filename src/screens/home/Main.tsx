import React from "react";
import styled from "styled-components/native";
import colors from "@/assets/styles/colors";
import { Dimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import GlingIcon from "@/assets/icons/home/gling.svg";
import RightArrowIcon from "@/assets/icons/home/rightArrow.svg";
import DashboardIcon from "@/assets/icons/home/dashboard.svg";
import InquiryIcon from "@/assets/icons/home/inquiry.svg";
import StatementIcon from "@/assets/icons/home/statement.svg";
import PortfolioIcon from "@/assets/icons/home/portfolio.svg";
import WriteIcon from "@/assets/icons/home/write.svg";
import CorrectionIcon from "@/assets/icons/home/correction.svg";
import ReqPublishIcon from "@/assets/icons/home/requestPublish.svg";
import MarketIcon from "@/assets/icons/home/market.svg";
import BannerIcon from "@/assets/icons/home/banner.svg";
import PublishLightIcon from "@/assets/icons/home/publishLight.svg";
import PublishBasicIcon from "@/assets/icons/home/publishBasic.svg";
import AroundDashboardIcon from "@/assets/icons/home/aroundDashboard.svg";

const navIconList = [
    { icon: <DashboardIcon />, label: "대시보드" },
    { icon: <InquiryIcon />, label: "정산 조회" },
    { icon: <StatementIcon />, label: "정산서" },
    { icon: <PortfolioIcon />, label: "포트폴리오" },
    { icon: <WriteIcon />, label: "글쓰기" },
    { icon: <CorrectionIcon />, label: "교정 교열" },
    { icon: <ReqPublishIcon />, label: "출간 요청" },
    { icon: <MarketIcon />, label: "글링 장터" },
]

const deviceWidth = Dimensions.get("window").width;
const gap = (deviceWidth - 240 - 40) / 3;

export default function Home() {
    return (
        <SafeAreaContainer>
            <ScreenContainer 
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            >
                <GlingIconWrapper>
                    <GlingIcon />
                </GlingIconWrapper>

                <AlertContainer>
                    <AlertWrapper>
                        <AlertText>
                            글링을 사용하려면 
                            <HighlightText> 회원가입</HighlightText>
                            이 필요합니다.
                        </AlertText>
                        <RightArrowIcon />
                    </AlertWrapper>
                </AlertContainer>

                <Text2Container>
                    <Text2Wrapper>
                        <Text2>
                            <HighlightText>출간</HighlightText>
                            부터 
                            <HighlightText> 정산</HighlightText>
                            까지
                        </Text2>
                        <Text2>글링에서 시작해보세요!</Text2>
                    </Text2Wrapper>
                </Text2Container>

                <Text3Container>
                    <Text3Wrapper>
                        <SubTitleText>지금 필요한 것은 무엇인가요?</SubTitleText>
                    </Text3Wrapper>
                </Text3Container>

                <NavIconContainer>
                    {navIconList.map((n, idx) => (
                        <NavIconWrapper gap={(idx + 1) % 4 !== 0 ? gap : 0} key={idx}>
                            {n.icon}
                            <NavIconLabel>{n.label}</NavIconLabel>
                        </NavIconWrapper>
                    ))}
                </NavIconContainer>

                <BannerWrapper deviceWidth={deviceWidth}>
                    <View>
                        <Text4>글링을 처음으로 사용한다면?</Text4>
                        <Text5>글링 이용 가이드</Text5>
                    </View>
                    <BannerIconWrapper>
                        <BannerIcon />
                    </BannerIconWrapper>
                </BannerWrapper>

                <PublishContainer>
                    <SubTitleText>혹시 출간 계획이 있으신가요?</SubTitleText>
                    <PublishWrapper>
                        <PublishLightIcon />
                        <PublishLabelWrapper>
                            <Text7>처음부터 끝까지, 내가 만드는 책</Text7>
                            <Text8>글링 출간 Lite</Text8>
                        </PublishLabelWrapper>
                    </PublishWrapper>
                    <PublishWrapper>
                        <PublishBasicIcon />
                        <PublishLabelWrapper>
                            <Text7>글링에서 모든 출간 서비스를 맛보세요!</Text7>
                            <Text8>글링 출간 basic</Text8>
                        </PublishLabelWrapper>
                    </PublishWrapper>
                </PublishContainer>

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
            </ScreenContainer>
        </SafeAreaContainer>
    )
}

const SafeAreaContainer = styled.SafeAreaView`
    background-color: ${colors.white};
`

const ScreenContainer = styled.ScrollView`
    background-color: ${colors.white};
`

const GlingIconWrapper = styled.View`
    display: flex;
    width: 100%;
    height: 44px;
    align-items: center;
    justify-content: center;
`

const AlertContainer = styled.View`
    width: 100%;
    padding: 0 20px;
    height: 60px;
`

const AlertWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 16px;
    margin: auto;
    border: 2px solid ${colors.gray300};
    border-radius: 99px;
`

const AlertText = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: ${colors.black};
`

const HighlightText = styled.Text`
    color: ${colors.blue500};
    font-weight: 700;
`

const SubTitleText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: ${colors.black};
    height: 44px;
    padding: 12px 0;
`

const Text2 = styled.Text`
    font-size: 24px;
    font-weight: 400;
    color: ${colors.black};
`

const Text2Container = styled.View`
    width: 100%;
    padding: 0 20px;
`

const Text2Wrapper = styled.View`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120px;
`

const Text3Container = styled.View`
    width: 100%;
    padding: 0 20px;
`

const Text3Wrapper = styled.View`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 44px;
`

const NavIconContainer = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 200px;
    padding: 12px 20px;
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

const NavIconLabel = styled.Text`
    font-size: 12px;
    font-weight: 700;
    color: ${colors.black};
`

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

const Text4 = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray600};
    margin-bottom: 4px;
`

const Text5 = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: ${colors.black};
`

const PublishContainer = styled.View`
    height: 204px;
    padding: 0 20px;
`

const PublishWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
`

const PublishLabelWrapper = styled.View`
    margin-left: 8px;
`

const Text7 = styled.Text`
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray600};
`

const Text8 = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: ${colors.black};
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