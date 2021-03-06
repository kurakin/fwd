import { connect } from 'react-redux'
import { loadRoutes } from '../actions'
import Component from '../components/Browser'

const mapStateToProps = state => {
  return {
    view: state.view.name
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchRoutes: () => {
      dispatch(loadRoutes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
