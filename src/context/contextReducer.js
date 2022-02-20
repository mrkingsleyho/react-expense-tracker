//Reducer => function that takes in the old state, and an action -> new state

const contextReducer = (state, action) => {
    let transactions;
  
    switch (action.type) {
      case 'DELETE_TRANSACTION':
        transactions = state.filter((transaction) => transaction.id !== action.payload);
        sessionStorage.setItem('transactions', JSON.stringify(transactions));
        return transactions;
      case 'ADD_TRANSACTION':
        transactions = [action.payload, ...state];
        sessionStorage.setItem('transactions', JSON.stringify(transactions));
        return transactions;
      default:
        return state;
    }
  };
  
  export default contextReducer;