import moment from "jalali-moment";

const toJalali = (date: string) => {
  return moment(date, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD");
};

export default toJalali;
