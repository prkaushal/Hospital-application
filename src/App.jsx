import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HospitalPage from "./components/HospitalPage";
import HospitalForm from "./components/HospitalForm";
import UserPage from "./components/UserPage";
import { BrowserRouter, Routes,  Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/hospitalPage" Component={HospitalPage} />
        <Route path="/hospitalForm" Component={HospitalForm} />
        <Route path="/userPage" Component={UserPage} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
