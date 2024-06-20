import { differenceInDays } from "date-fns";

export const totalDays = () => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 0, 1);
    const daysUntilToday = differenceInDays(now, targetDate) + 1;

    return daysUntilToday;
};
