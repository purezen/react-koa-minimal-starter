function loadCurrencyList(currencyList) {
  return {
    type: 'LOAD_CURRENCY_LIST',
    currencyList: currencyList
  }
}

export function fetchCurrencyList() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/currency')
      .then(response => response.json())
      .then(json => dispatch(loadCurrencyList(json.currency)))
  }
}
