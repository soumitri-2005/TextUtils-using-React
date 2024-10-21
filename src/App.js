import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  // adding theme and the reason adding this here bcz i can access the body of our page here directly
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  //for alert
  const [alert, setAlert] = useState(null);
  // here i am passing two vars i.e for the alert msg that you want to show can be accessed through message and type is color by bootstrap like "success" is green color(it will convert your alert msg to green color)
  // and now you can use it in any where
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  return (
    // we can use only single element so better to erite this in <>...</>
    <>
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div>
        <TextForm showAlert={showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;
