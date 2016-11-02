import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import LoadingBar, { showLoading, hideLoading} from 'react-redux-loading-bar'

import store from './store'

ReactDOM.render((
  <Provider store={store}>
    <div>
      <LoadingBar />
      <button onClick={() => store.dispatch(showLoading())}>Show</button>
      <button onClick={() => store.dispatch(hideLoading())}>Hide</button>
    </div>
  </Provider>
), document.getElementById('app'))
