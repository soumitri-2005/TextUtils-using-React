import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// so here i am using react router and i want to switch between my About and TextForm JS
// import { 
//   BrowserRouter as Router,
//   Routes, 
//   Route, 
//   // Link 
// } from 'react-router-dom';


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
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */}

      {/* here i called my componet */}
      {/* so here i am making my props (title, abouttext....) and giving some values as my choice*/}
      {/* <Router>
        <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div>
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router> */}
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div>
        <TextForm showAlert={showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;
