import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/about";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

function App() {
  const [mood, setmood] = useState("light");
  const [dt, setdt] = useState("dark");
  const [bwText, setbwText] = useState("black");
  const [btncolor, setbtncolor] = useState({
    color: "Red",
    backgroundColor: "lightGrey"
    , border: "1px solid lightGrey"
  }
  )

  const [mystyle, setMyStyle] = useState({
    color: "black",
    background: "lightsteelblue"

  });

  const [grey, setgrey] = useState({
    color: "black",
    backgroundColor: "white",
  });
  // const [alert, setalert] = useState(null);

  // const showAlert = (message, type) => {
  //   setalert({
  //     msg:message,
  //     typ:type
  //   })
  // };

  const removeClasses = () => {
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
  }

  const darkMood = (cls) => {
    removeClasses();
    document.body.classList.add("bg-" + cls)
    if (mood === "light") {
      setmood("dark");
      setdt("light");
      setbwText("white");
      document.body.style.backgroundColor = "#444040";
      document.body.style.color = "white";
      setbtncolor({
        color: "lightgrey",
        backgroundColor: "#444040"
        , border: "1px solid #444040"

      })
      setMyStyle({
        color: "white",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(66,82,101,1) 100%, rgba(157,201,194,1) 100%, rgba(0,212,255,1) 100%)",
      });
      setgrey({
        color: "white",
        backgroundColor: "grey",
      });
    }

    // showAlert("Dark mode has been Enable, Succes")
    else {
      setmood("light");
      setdt("dark");
      setbwText("black");
      document.body.style.backgroundColor = "#d4d4d4";
      document.body.style.color = "black";
      setbtncolor({
        color: "red",
        backgroundColor: "lightGrey"
        , border: "1px solid Lightgrey"

      })
      setMyStyle({
        color: "black",
        background: "lightsteelblue"

      });
      setgrey({
        color: "black",
        backgroundColor: "white",
      });

      // showAlert("Light mod has been Enable, Succes")
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mood={mood}
          darkMood={darkMood}
          dt={dt}
          btncolor={btncolor}
          bwText={bwText}
        />
        <div className="container my-5">

          <Routes>
            <Route exact path="/about" element={<About heading="About" mystyle={mystyle} grey={grey} />} />
            <Route exact path="/" element={<TextForm
              heading="Enter the text to analyze"
              heading2="Your Text2 Summary"
              heading3="Preview"
            />} />
          </Routes>

        </div>

      </Router>
    </>
  );
}
export default App;
