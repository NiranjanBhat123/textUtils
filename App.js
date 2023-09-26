import "./App.css";
import React, { useState } from "react";
import Nav from './components/Nav'
import TextForm from "./components/TextForm";
import Close from "./components/Close";


function App()
{
  const [mode,setDarkMode]= useState("light")
  const ToggleMode=()=>{
    if(mode==='light'){
      setDarkMode("dark");
      document.body.style.background = "grey"
    }
    else{
      setDarkMode("light")
      document.body.style.background = "white"
    }
  }
  return(
    <>
    <Nav title = "TextUtils" mode={mode}  toggleMode = {ToggleMode}/>
    <div className="container">
      <Close/>
      <br />
    <TextForm mode={mode} heading = "Enter the text here"/>
    </div>
    </>
  );
}
export default App;




