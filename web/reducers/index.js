import update from 'immutability-helper'

const initialState = {
  currencyList: []
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'LOAD_CURRENCY_LIST':
      return update(state, { currencyList: { $set: action.currencyList } })
    default:
      return state
  }
}

export default reducer
