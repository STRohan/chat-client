
   import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ContainedButtons extends React.Component  {
  constructor(props){
      super(props);
      state={
          count:1,
      }
  }  
  onSubmit() {
    this.setState({count: this.state.count + 1},
    this.props.onSubmitCallback()
   );
   }

  render(){
  return (
    <div>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
    </div>
  );
}}



export default ContainedButtons;