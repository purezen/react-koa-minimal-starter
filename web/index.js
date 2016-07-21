import { AppContainer as RootContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import AppContainer from './containers/AppContainer'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <RootContainer>
      <AppContainer />
    </RootContainer>
  </Provider>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./containers/AppContainer', () => {
    const NextApp = require('./containers/AppContainer').default;
    ReactDOM.render(
      <RootContainer>
         <NextApp />
      </RootContainer>,
      rootElement
    );
  });
}
