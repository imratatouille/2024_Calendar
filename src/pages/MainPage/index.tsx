import React from "react";

import { totalDays } from "../../utils";
import { OneYearBlock } from "../../components";

import * as S from "./styled";

export const MainPage: React.FC = () => {
    return (
        <S.MainCont>
            <OneYearBlock nowDay={totalDays()} />
        </S.MainCont>
    );
};
