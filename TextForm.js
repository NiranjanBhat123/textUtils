import React,{useState} from "react";




export default function TextForm(props) {
   const  handleUpClick =()=>{
    console.log("uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    btnText("converted to uppercase!")
   }
   const handleOnChange=(event)=>{
    
    setText(event.target.value)
   }

   const handleClear=()=>{
    setText('')
   }

   const copyText=()=>{
    let copyGfGText =
                document.getElementById("exampleFormControlTextarea1");
 
            copyGfGText.select();
            document.execCommand("copy");
            

   }
  
   const [text,setText]= useState("")
   const [butn,btnText] = useState("convert to uppercase")
  return (
    <>
    <div>
        <h2>Enter the text here</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="13"
          value = {text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='light'?'white':'darkgrey'}}
        ></textarea>
        <br/>
        <button type="button"  className="btn btn-primary" onClick={handleUpClick} >{butn}</button>
        <button type="button"  className="btn btn-primary mx-3" onClick={handleClear} >clear</button>
        <button type="button" className="btn btn-primary"
        onClick={copyText}
        data-bs-toggle="popover" data-bs-placement="right"
        data-bs-custom-class="custom-popover"
        data-bs-title="Custom popover"
        data-bs-content="This popover is themed via CSS variables.">
  copy
</button>
      </div>
    </div>
    <div className="container">
    <h1>Text summary</h1>
    <p>word count = {text.split(" ").length} character count = {text.length}</p>
    </div>
    
    
    </>
  );
}
