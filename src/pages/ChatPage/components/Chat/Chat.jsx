import React from "react";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";
import Message from './component/message'

const GET_CHAT = gql`
  query($senderId: String!, $receiverId: String!) {
    GetChat(senderId: $senderId, receiverId: $receiverId) {
      id
      senderId
      receiverId
      sender
      receiver
      message
    }
  }
`;

const GET_ALL_CHAT = gql`
  query {
  AllChat {
    id
    senderId
    receiverId
    sender
    receiver
    message
    }
  }`;

  class Chat extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            message:''
        }
    }
        render(){

            const { message } = this.state 
            return(
                <>
                <Query query={GET_CHAT} variables={{senderId:'head@gmail.com.1' , receiverId: 'head2@gmail.com.2'}} >
                {({ loading, error, data, subscribeToMore }) => {
                    if (loading) return 'loading';
                    if (error) return `Error!: ${error}`;
                    console.log('data::',data)
                    return(<Message data={data} /> )
                }}
            </Query>
                {/* <Query query={GET_CHAT} variables={{senderId:'head@gmail.com.1' , receiverId: 'head2@gmail.com.2'}} >
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        data
      );
    }}
  </Query> */}
                
                </>
            )
        }
    }

    export default Chat;