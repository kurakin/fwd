import { createStore, applyMiddleware } from 'redux'
import promises from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

export default createStore(
  rootReducer,
  {
    view: {name: 'welcome'}
  },
  applyMiddleware(
    promises(),
    createLogger()
  )
)
