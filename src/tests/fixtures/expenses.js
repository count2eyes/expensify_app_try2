import moment from "moment";

export default [
  {
    id: "1",
    description: "coffee",
    amount: 2.75,
    note: "decaff-rebuff",
    createdAt: moment(0)
  },
  {
    id: "2",
    description: "fare",
    amount: 12.5,
    note: "ubar no care",
    createdAt: moment(0).add(2, "days")
  },
  {
    id: "3",
    description: "dinner",
    amount: 23.85,
    note: "meh",
    createdAt: moment(0).subtract(2, "days")
  }
];
