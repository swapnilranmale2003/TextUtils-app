import React, { useState } from "react";
import "./App.css";
import About from "./component/About";
import Counter from "./component/Counter";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      // document.body.style.color="white";
      document.title = "Text- Dark mode";
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
      document.title = "Text- Light mode";
    }
  };
  return (
    <div className="App">
      {/* <Hello name="Sai">
      <p>Lorem ipsum dolor sit amet.</p>
      </Hello>
      <Hello name="Shiv" /> */}
      {/* <Hello name = "XYZ" />
      <Message /> */}
      {/* <Counter /> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      {/* <Alert alert = " this is alert box " /> */}
      <div className="container my-3">
        <React.Fragment>
        <Routes>
          <Route path="/about" element={<About />} />
         <Route path="/textform" element ={<TextForm />} />
        </Routes>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
