import { differenceInDays } from "date-fns";

export const totalDays = () => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 0, 1); // 올해의 1월 1일로 설정
    const daysUntilToday = differenceInDays(now, targetDate) + 1; // 현재 날짜까지의 총 일수 계산

    return daysUntilToday;
};
