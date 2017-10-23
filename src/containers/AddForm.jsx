import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addRoute } from '../actions'
import Component from '../components/AddForm'

const mapStateToProps = state => {
  return {
    loggedIn: state.session.loggedIn,
    error: state.add.error
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addRoute: (name, url) => {
      dispatch(addRoute(name, url)).catch(() => {})
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component))
