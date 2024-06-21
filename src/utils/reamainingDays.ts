import { totalDays } from "./totalDays";

export const remainingDays = () => {
    let remainingDays = 365 - totalDays();
    return remainingDays;
};
