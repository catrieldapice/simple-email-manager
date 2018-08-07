import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../redux/login/loginActions';
import Main from './Main';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      login,
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
