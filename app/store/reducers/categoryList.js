const initialState = [
  {
    id: "1",
    title: "شخصی",
    totalSum: "-2",
    remained: "0",
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
    id: "2",
    title: "کار",
    totalSum: "122000000",
    remained: "1",
    transaction: [
      {
        id: 14333,
        title: "خرید 222",
        amount: 2000000,
        date: "۱۴ فروردین ۱۴۰۰",
        type: "income",
      },
      {
        id: 22234,
        title: "خرید 222",
        amount: 2000000,
        date: "۱۵ فروردین ۱۴۰۰",
        type: "expense",
      },
      {
        id: 411322,
        title: "خرید 222",
        amount: 15000,
        date: "۱۶ فروردین ۱۴۰۰",
        type: "income",
      },
    ],
  },
  {
    id: "3",
    title: "منزل",
    totalSum: "122000000",
    remained: "-3",
    transaction: [
      {
        id: 1439898,
        title: "خرید 333",
        amount: 2000000,
        date: "۱۴ فروردین ۱۴۰۰",
        type: "income",
      },
      {
        id: 289987734,
        title: "خرید 333۲",
        amount: 2000000,
        date: "۱۵ فروردین ۱۴۰۰",
        type: "expense",
      },
      {
        id: 4377822,
        title: "خرید 33",
        amount: 15000,
        date: "۱۶ فروردین ۱۴۰۰",
        type: "income",
      },
    ],
  },
];

const categoryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return [
        ...state,
        {
          id: Date.now().toString(),
          title: action.payload,
          totalSum: "0",
          remained: "0",
          transaction: [],
        },
      ];
    case "ADD_TRANSACTION":
      return state.map((category) =>
        category.id === action.payload.id
          ? {
              ...category,
              transaction: [
                ...category.transaction,
                {
                  id: Date.now().toString(),
                  title: action.payload.title,
                  amount: action.payload.amount,
                  date: action.payload.date,
                  type: action.payload.type,
                },
              ],
            }
          : category
      );
    default:
      return state;
  }
};
export default categoryListReducer;
