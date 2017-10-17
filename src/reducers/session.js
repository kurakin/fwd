import typeToReducer from 'type-to-reducer'
import { SESSION } from '../actions'

export default typeToReducer({
  [SESSION]: {
    PENDING: (state) => ({
      ...state,
      loading: true
    }),
    FULFILLED: (state, action) => ({
      loading: false,
      isFullfilled: true,
      loggedIn: true
    }),
    REJECTED: (state, action) => ({
      loading: false,
      isRejected: true,
      error: action.payload
    })
  }
}, { loading: false, loggedIn: false, error: false })
