import React from "react";
import styled from "styled-components/native";

export default function CustomText(props: any) {
    let fontFamily = "";

    switch(props.fontWeight) {
        case "100":
            fontFamily = "Spoqa-Han-Sans-Neo-Thin";
            break;
        case "300":
            fontFamily = "Spoqa-Han-Sans-Neo-Light";
            break;
        case "400":
            fontFamily = "Spoqa-Han-Sans-Neo-Regular";
            break;
        case "500":
            fontFamily = "Spoqa-Han-Sans-Neo-Medium";
            break;
        case "700":
            fontFamily = "Spoqa-Han-Sans-Neo-Bold";
            break;
        case "800":
            fontFamily = "Spoqa-Han-Sans-Neo-Bold";
            break;
        default:
            fontFamily = "Spoqa-Han-Sans-Neo-Regular";
            break;
    }

    return (
        <StyledText fontWeight={props.fontWeight} fontFamily={fontFamily}>
            {props.children}
        </StyledText>
    )
}

const StyledText = styled.Text<{ fontWeight: string; fontFamily: string; }>`
font-size: 20px;
    font-family: ${({ fontFamily }: any) => fontFamily};
    font-weight: ${({ fontWeight }: any) => fontWeight};
`