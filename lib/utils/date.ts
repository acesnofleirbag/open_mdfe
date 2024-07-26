export class DateUtility {
    static now() {
        const base = new Date()
            .toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hourCycle: "h23",
                timeZoneName: "longOffset",
            })
            .replace(/\s/g, "");

        const [date, time] = base.split(",");
        const [month, day, year] = date.split("/");

        return year + "-" + month + "-" + day + "T" + time.replace(/GMT/, "");
    }
}
