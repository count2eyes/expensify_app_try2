import moment from "moment";

const selector = (expenses, filters) => {
  return expenses
    .filter(expense => {
      const matchedText = filters
        ? expense.description.includes(filters.text)
        : true;
      const matchedStartDate = filters.startDate
        ? moment(expense.createdAt).isSameOrAfter(filters.startDate, "day")
        : true;
      const matchedEndDate = filters.endDate
        ? moment(expense.createdAt).isSameOrBefore(filters.endDate, "day")
        : true;

      return matchedText && matchedStartDate && matchedEndDate;
    })
    .sort((a, b) => {
      if (filters.sortBy === "date") {
        return b.createdAt - a.createdAt;
      } else if (filters.sortBy === "amount") {
        return b.amount - a.amount;
      }
    });
};

export default selector;
