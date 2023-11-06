const initialState = [
  {
    id: 1,
    personName: "محسن ",
    amountBalanse: "0",
    personType: "هر چیزی میتونه باشه",
    totalSum: "12200000",
    remained: "1222222",
    transaction: [
      {
        id: 143,
        title: "خرید 111",
        amount: 2000000,
        date: "۱۴ فروردین ۱۴۰۰",
        type: "income",
      },
      {
        id: 234,
        title: "خرید 111",
        amount: 2000000,
        date: "۱۵ فروردین ۱۴۰۰",
        type: "expense",
      },
      {
        id: 4322,
        title: "خرید 1111",
        amount: 15000,
        date: "۱۶ فروردین ۱۴۰۰",
        type: "income",
      },
    ],
  },
  {
    id: 2,
    personName: " میرزایی",
    amountBalanse: "4234324",
    personType: "هر چیزی میتونه باشه",
    totalSum: "2200000",
    remained: "3322222",
    transaction: [
      {
        id: 143,
        title: "خرید 22",
        amount: 2000000,
        date: "۱۴ فروردین ۱۴۰۰",
        type: "income",
      },
      {
        id: 234,
        title: "خرید 222",
        amount: 2000000,
        date: "۱۵ فروردین ۱۴۰۰",
        type: "expense",
      },
      {
        id: 4322,
        title: "خرید 22",
        amount: 15000,
        date: "۱۶ فروردین ۱۴۰۰",
        type: "income",
      },
    ],
  },
];

const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [
        ...state,
        {
          id: Date.now().toString(),
          amountBalanse: "0",
          personName: action.payload.personName,
          personType:
            action.payload.personType === undefined
              ? ""
              : action.payload.personType,
          totalSum: "",
          remained: "",
          transaction: [],
        },
      ];
    case "ADD_TRANSACTION":
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default contactListReducer;
