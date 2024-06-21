import { format } from "date-fns";

export const getNowDay = () => {
    const now = new Date();
    let nowDate = format(now, "yyyy년MM월dd일");
    return nowDate;
};
