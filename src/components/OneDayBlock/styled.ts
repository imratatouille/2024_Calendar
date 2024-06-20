/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled/macro";

interface OneDayBlockContProps {
    nowDays: number;
    day: number;
}

export const OneDayBlockCont = styled.div<OneDayBlockContProps>`
    border: solid 1px;
    width: 30px;
    height: 30px;
    background-color: ${({ nowDays, day }) => (day <= nowDays ? "green" : "transparent")};
`;
