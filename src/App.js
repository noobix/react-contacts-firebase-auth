import React from 'react';
import './App.css';
import firebase from './firebase/config'
import {setContacts, setUserDetails} from './actions/Action'
import {connect} from 'react-redux'
import Router from './Router'

class App extends React.Component{
  constructor(){
    super();
    this.state = {contacts:[]};
  }
  componentDidMount = () => {
    firebase.firestore().collection("contacts").onSnapshot ((document) =>{
      let contacts = [];
      document.forEach ((doc) => {
        contacts.push(doc.data())
      })
      this.props.setContacts(contacts)
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.props.setUserDetails(user)
      }
      else{
        this.props.setUserDetails(null)
      }
    })
  }

  render() {
    return <>
      <Router />
    </>
  }
}
const mapDispatchToProps = {
  setContacts:setContacts,
  setUserDetails:setUserDetails
}
export default connect(null,mapDispatchToProps) (App);