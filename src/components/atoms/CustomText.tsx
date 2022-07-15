import React from "react";
import styled from "styled-components/native";

const handleFont = (fontWeight: string) => {
    switch(fontWeight) {
        case "100":
        case "200":
            return "Spoqa-Han-Sans-Neo-Thin";
        case "300":
            return "Spoqa-Han-Sans-Neo-Light";
        case "400":
            return "Spoqa-Han-Sans-Neo-Regular";
        case "500":
        case "600":
            return "Spoqa-Han-Sans-Neo-Medium";
        case "700":
        case "800":
            return "Spoqa-Han-Sans-Neo-Bold";
        default:
            return "Spoqa-Han-Sans-Neo-Regular";
    }
}

const StyledText = styled.Text<{ fontWeight: string; }>`
    font-family: ${({ fontWeight }: any) => handleFont(fontWeight)};
    font-weight: ${({ fontWeight }: any) => fontWeight};
`

export default StyledText;