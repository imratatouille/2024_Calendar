import { totalDays } from "./totalDays";

export const dayPercentage = () => {
    return Math.floor((totalDays() / 365) * 100);
};
