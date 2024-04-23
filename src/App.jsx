import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/login'


const App = () => {

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type)=>{
    setAlert({
      msg:msg,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Switch>
            <Route exact path="/">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/home">
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/signup">
              <Signup showAlert={showAlert} />
            </Route>
          </Switch>
      </Router>
    </NoteState>
    </>
  )
}

export default App
