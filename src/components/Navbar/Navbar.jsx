import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const styles = {
  root: {
    hieght: 10,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logout: {
    flexGrow: 0.2,
    textAlign: 'right',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography color="inherit" className={classes.grow}>
            Chat Portal
            </Typography>
            <Button size="small" color="inherit">
              <Link style={styles.link} to="/trainee">Home</Link>
            </Button>

            <Typography color="inherit" className={classes.logout}>
              <Button size="small" color="inherit">
                <Link style={styles.link} to="/login">Logout</Link>
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.shape(),
};

Navbar.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Navbar);
