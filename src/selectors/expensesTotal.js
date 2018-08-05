export default expenses =>
  expenses.map(el => el.amount).reduce((acc, curr) => acc + curr, 0);
