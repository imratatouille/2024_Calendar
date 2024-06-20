import React from "react";

import * as S from "./styled";

export interface dayNum {
    nowDay: number;
    day: number;
}

export const OneDayBlock: React.FC<dayNum> = ({ day, nowDay }) => {
    return (
        <S.OneDayBlockCont nowDays={nowDay} day={day}>
            {day}
        </S.OneDayBlockCont>
    );
};
