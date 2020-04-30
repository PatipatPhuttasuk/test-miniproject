import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import StudentList from "./components/student/StudentList";
import InputForm from "./components/student/InputForm";
import Nevbar from "./components/nevbar/menu";
import "./App.css";
import auth from './firebase';

function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });
  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });
    return () => {
      handleAuth();
    }
  }, [])
const handleLogout = () => {
  auth.signOut().than(response => {
    setSession({
      isLoggedIn: false,
      currentUser: null
    });
  });
}
  return (
    <div className="body-App">
      {session.isLoggedIn ? (
        ((<Nevbar />),
        (<h1>Insert Data</h1>),
        (<InputForm />),
        (<h1>Students Infomation</h1>),
        (<StudentList />))
        ,<h1>Ahoy!, {session.currentUser && session.currentUser.email}</h1>
        ,<button type="button" onClick={handleLogout}></button>
      ) : (
        <Login setSession={setSession} />
      )}
    </div>
  );
}

export default App;
