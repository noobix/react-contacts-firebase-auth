import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const protectedRoute = ({children, user}) => {
    if (!user) return (<Navigate to="/signIn" replace= {true} />)
    return children
}
const mapStateToProps = (state) => {
    return{user: state.auth.user}
}
export default connect(mapStateToProps)(protectedRoute)