import { useState } from "react";
import "./TextForm.css"

function ConvertLowercase(){

    const [text, setText]=useState("enter text here");

    function Conversion(){
        console.log("cicked");
setText(text.toLowerCase());
    }

    function ChangeHandler(event){
setText(event.target.value);
    }
    return(
        <div>
        <textarea value={text} onChange={ChangeHandler} rows="5" col="5"></textarea>
        {/* <button className="btn2" onClick={Conversion} >Convert to Lowercase</button> */}
        <button type="button" className="btn btn-primary my-2" onClick={Conversion}>Convert to Lowercase</button>
        </div>
    );
}

export default ConvertLowercase;