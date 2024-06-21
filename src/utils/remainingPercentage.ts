import { dayPercentage } from "./dayPercentage";

export const remainingPercetage = () => {
    let remainingDays = 100 - dayPercentage();
    return remainingDays;
};
