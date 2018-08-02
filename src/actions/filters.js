export const setText = text => {
  return {
    type: "SET_TEXT",
    text
  };
};

export const sortBy = dateOrAmount => {
  return { type: "SORT_BY", dateOrAmount };
};

export const setStartDate = startDate => {
  return {
    type: "SET_START_DATE",
    startDate
  };
};

export const setEndDate = endDate => {
  return {
    type: "SET_END_DATE",
    endDate
  };
};
