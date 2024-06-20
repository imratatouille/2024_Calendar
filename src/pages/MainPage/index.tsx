import React from "react";

import { totalDays, getNowDay, dayPercentage } from "../../utils";
import { OneYearBlock } from "../../components";

import * as S from "./styled";

export const MainPage: React.FC = () => {
    return (
        <S.MainCont>
            <OneYearBlock nowDay={totalDays()} />
            <S.DayCont>
                오늘: {getNowDay()} <br />
                2024년은 {dayPercentage()}%가 지났습니다.
            </S.DayCont>
        </S.MainCont>
    );
};
