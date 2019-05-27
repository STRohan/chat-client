import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar";
import Grid from "@material-ui/core/Grid";
import { CssBaseline } from "@material-ui/core";
import Chat from './components/Chat/Chat';


class ChatPage extends React.Component {
  state = {};

  render() {
    return (
      <>
      <div style={{ paddingBottom: '12px'}} >
        <CssBaseline/>
        <Navbar />
        </div>
        <div >
        <Grid container spacing={24}>
          <Grid item xs={3} style={{ backgroundColor: 'darkGrey'  }} >
            
            User List
          </Grid>
          <Grid item xs={9} style={{ backgroundColor: 'grey' }} >
            Chating Area
            <Chat/>
          </Grid>
        </Grid>
        </div>
      </>
    );
  }
}

Chat.propTypes = {
  classes: PropTypes.shape().isRequired
  // history: PropTypes.shape().isRequired,
};
export default ChatPage;
