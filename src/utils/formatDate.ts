import moment from "moment";

type DateReturn =
  | "withoutHours"
  | "withoutHoursDashed"
  | "withoutDate"
  | "cardEvent"
  | "day"
  | "month"
  | "year";

export function formatDate(date: Date, type?: DateReturn) {
  const dateList = {
    withoutHours: "DD/MM/YYYY",
    withoutHoursDashed: "YYYY-MM-DD",
    withoutDate: "HH:mm:ss",
    cardEvent: "DD MMM YYYY - HH:mm",
    day: "DD",
    month: "MM",
    year: "YY",
    default: "DD/MM/YYYY HH:mm:ss",
  };
  const dateFormated = moment(date, "YYYY-MM-DD HH:mm:ss")
    .format(dateList[type] || dateList.default)
    .toString();

  return dateFormated;
}
