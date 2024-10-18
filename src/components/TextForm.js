// so here i imported the useState hook from react
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("button was clicked" + text);
        // setText("you have clicked on handelOnClick"); // correct way to change state and here the msg will be shown on the text area after clicking the button 
        // so as we want our btn should change the user's text to uppercase we can do this.....
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    };
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    };
    // const handleSenClick = () => {
    //     let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function(c) {
    //         return c.toUpperCase()
    //     });
    //     setText(newText);
    // }
    const handleSenClick = () => {
        let newText = text.toLowerCase();
        let sentences = newText.split('. '); // spliting the textarea into sentences
        for (let i = 0; i < sentences.length; i++) {
            sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1); 
        }
        let senText = sentences.join('. '); // join sentences back together
        setText(senText);
        props.showAlert("Converted to sentence case!", "success")
    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    };
    const handelCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!" ,"success");
    };
    

    // not usefull but compulssory
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // here whenever i want to udpdate the text i will do it through setText function
    // what happening here is, i have created two state vars i.e text and setText() so by using useState and whereever i will use that text , there the value will be automarticlly set to "Enter text here" bcz i have written that under useState and i will call the function called setText("....") whenever i want to change the value of that text
    const [text, setText] = useState("Enter text here"); // this the syntax 
    
    return (
        <>
        {/* here the container, my-3, mx-2...... are bootstrap components which gives some css */}
        <div className="container my-3" style={{color: props.mode === "dark" ? "white": "black"}}>
            <h2>Enter your text to analyze</h2>
            <div className="mb-3">
                {/* so here i set the value of textarea to the value of text */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "black": "white", color: props.mode === "dark" ? "gray": "black", border: '2px solid gray'}} id="myBox" rows="7"></textarea> 
            </div>
            {/* here i am giving some function(converting the text to uppercase) to the btn and i am making my own event */}
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSenClick}>Convert to Sentence case</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelCopyClick}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-2" style={{color: props.mode === "dark" ? "white": "black"}}>
            <h3>Your text summary</h3>
            <p>{text.trim().length > 0 ? text.trim().split(/\s+/).length : 0} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

