import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn"
import Home from "./components/Home"
import Register from "./components/register"
import ProtectedRoute from "./components/protectedRoute"

const Router = () => {
    return(<BrowserRouter>
        <Routes>
            <Route path="/" element= {<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/signIn" element= {<SignIn />} />
            <Route path="/register" element= {<Register />} />
        </Routes>
    </BrowserRouter>)
}
export default Router