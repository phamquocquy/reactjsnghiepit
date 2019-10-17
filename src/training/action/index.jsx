export const status = () => {
  return {
    type: "TOGGLE"
  };
};

export const sort = sort => {
  return {
    type: "SORT",
    sort: sort
  };
};
