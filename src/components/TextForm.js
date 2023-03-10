import React,{useState} from 'react';

function TextForm(props) {
    const handleOnclick = () =>{
        let text1 = text.toUpperCase();
        settext(text1);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleonclick = () =>{
        let text1 = text.toLowerCase();
        settext(text1);
        props.showAlert("Converted to lowercase!", "success");
    }
    const clear = ()=>{
        settext("")
        props.showAlert("Text Clear", "success");
    }
    const handleOnwrite = (event) =>{
      let text2 = event.target.value;
      settext(text2)
    }
    const [text ,settext] = useState("");
    return (
        <div>      <div className='container'>
                   <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnwrite} id="myarea" rows="8" style={{border :'3px solid',backgroundColor: props.mode === 'dark'?'grey':'white' }}></textarea>
                    </div>
                    <button className='btn btn-primary mx-1' onClick={handleOnclick}>Convert Into UpperCase</button>
                    <button className='btn btn-primary mx-1' onClick={handleonclick}>Convert Into SmallCase</button>
                    <button className='btn btn-primary mx-1' onClick={clear}>Clear</button>
                    </div> 
                    <div className='container' >
                    <h1>Your Text Summary</h1>
                    <p>{text.split(" ").length-1} words and {text.length} characters </p>
                    <p>{0.008*(text.split(" ").length-1)} Minutes To Read</p>
                    <h2>Preview:</h2>
                    <p>{text.length>0?text:"Enter The Text To Preview It"}</p>
                    </div>
                    

        </div>
    );
}

export default TextForm;