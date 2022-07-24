import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../actions/types";

const initialState = {
  transactions: [
    { addedtime: 1656611111000, id: 1, title: "Rahul", price: 100 },
  //  { addedtime: 1576590342000, id: 2, title: "Paypal", price: 400 },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};
