import config from '../../config'

const API_ENDPOINT = `${config.API_URL}/api`

function loadCurrencyList(currencyList) {
  return {
    type: 'LOAD_CURRENCY_LIST',
    currencyList: currencyList
  }
}

export function fetchCurrencyList() {
  return (dispatch) => {
    return fetch(`${API_ENDPOINT}/currency`)
      .then(response => response.json())
      .then(json => dispatch(loadCurrencyList(json.currency)))
  }
}
