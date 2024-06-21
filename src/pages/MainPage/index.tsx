import React from "react";

import { totalDays, getNowDay, dayPercentage, remainingDays, remainingPercetage } from "../../utils";
import { OneYearBlock } from "../../components";

import * as S from "./styled";

export const MainPage: React.FC = () => {
    return (
        <S.MainCont>
            <OneYearBlock nowDay={totalDays()} />
            <br />
            <S.DayCont>
                오늘은 {getNowDay()} 입니다.
                <br />
                365일 중 {totalDays()}일이 지났고 {remainingDays()}일이 남았습니다.
                <br />
                2024년은 {dayPercentage()}%가 지났고 {remainingPercetage()}%가 남았습니다.
            </S.DayCont>
            <S.Advice>지금 이걸 보고도 놀고 싶은 생각이 들어?</S.Advice>
        </S.MainCont>
    );
};
