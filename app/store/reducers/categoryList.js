const initialState = [
  { id: "1", title: "شخصی", totalSum: "-2", remained: "0" },
  { id: "2", title: "کار", totalSum: "122000000", remained: "1" },
  { id: "3", title: "منزل", totalSum: "122000000", remained: "-3" },
];

const categoryListReducer = (state = initialState, action) => {
  return state;
};
export default categoryListReducer;
