import React from "react";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";
import UserList from './component/UserList'



const GET_ALL_User= gql`
  query {
    GetUsers {
      id
      name
      email
      password
    }
  }`;

  class Chat extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            userList:''
        }
    }
        render(){

            const { message } = this.state 
            return(
                <>
                <Query query={GET_ALL_User} >
                {({ loading, error, data, subscribeToMore }) => {
                    if (loading) return 'loading';
                    if (error) return `Error!: ${error}`;
                    console.log('data::',data)
                    return(<UserList data={data} /> )
                }}
            </Query>
                
                
                </>
            )
        }
    }

    export default Chat;