import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout } from '../../redux/login/loginActions';
import Main from './Main';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      login,
      logout,
    },
    dispatch,
  ),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(Main),
);
