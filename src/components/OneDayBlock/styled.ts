/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled/macro";

interface OneDayBlockContProps {
    nowDays: number;
    day: number;
}

export const OneDayBlockCont = styled.div<OneDayBlockContProps>`
    border: ${({ nowDays, day }) => (day <= nowDays ? "dashed 2px blue" : "solid 2px red")};
    width: 30px;
    height: 30px;
    background-color: ${({ nowDays, day }) => (day <= nowDays ? "skyblue" : "transparent")};
`;
