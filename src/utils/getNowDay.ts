import { format } from "date-fns";

export const getNowDay = () => {
    const now = new Date();
    let nowDate = format(now, "yyyy-MM-dd");
    return nowDate;
};
