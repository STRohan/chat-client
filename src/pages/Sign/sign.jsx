import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';


class Sign extends React.Component {
    state = {
      openSignUp: false,
      openSignIn: false,
    }

  handleOpen = (field) => {
    this.setState({
      [field]: true
    })
  }

  handleClose = (field) => {
    this.setState({
      [field]: false
    })
  }

  render() {
    const { openSignUp, openSignIn } = this.state;
    console.log('::::::', this.state)
    return (
      <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'spaceBetween' }}>
      <Button variant="contained" color="primary"  onClick={ () => this.handleOpen('openSignIn')}>
      SignIn
    </Button>
    {(!openSignIn)? null : <SignIn open={openSignIn} onClose={ () => this.handleClose('openSignIn') } />}

    <Button variant="contained" color="secondary"  onClick={ () => this.handleOpen('openSignUp')}>
    SignUp
    </Button>
    {(!openSignUp)? null : <SignUp open={openSignUp} onClose={ () => this.handleClose('openSignUp') } />}
    </div>
      </>
    );
  }
}

Sign.propTypes = {
  classes: PropTypes.shape().isRequired,
  // history: PropTypes.shape().isRequired,

};

export default Sign;
