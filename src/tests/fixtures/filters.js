import moment from "moment";

export const state = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

export const altState = {
  text: "ffe",
  sortBy: "amount",
  startDate: moment(0),
  endDate: moment(0).add(2, "days")
};
