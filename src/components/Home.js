import React from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase/config";
import { Button } from "react-bootstrap";
import FirstPage from "./clsmm"

class home extends React.Component {
    signOut = async() => {
        try {
            firebase.auth().signOut()
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return(<React.Fragment>
            <Button variant="outline-primary"><Link to="/signIn">SignIn</Link></Button>
            <Button variant="outline-warning"><Link to="/register">Register</Link></Button>
            <Button variant="outline-secondary" onClick={this.signOut}>Sign Out</Button>
            <FirstPage />
        </React.Fragment>)
    }
}
export default home