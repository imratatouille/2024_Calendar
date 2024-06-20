import React from "react";

import { OneDayBlock } from "../OneDayBlock";
import * as S from "./styled";

interface nowDays {
    nowDay: number;
}

export const OneYearBlock: React.FC<nowDays> = ({ nowDay }) => {
    const daysArray = Array.from({ length: 365 });
    return (
        <S.OneYearCont>
            {daysArray.map((_, index) => (
                <OneDayBlock key={index + 1} day={index + 1} nowDay={nowDay}></OneDayBlock>
            ))}
        </S.OneYearCont>
    );
};
