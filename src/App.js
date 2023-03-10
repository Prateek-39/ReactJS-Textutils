import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import Alert from './components/Alert'

function App() {
  const [mode,setmode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }


  const toogle =()=>{
    if (mode === 'light') {
         document.body.style.backgroundColor = "#6c757d";
         setmode('dark');
         showAlert("Dark mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
        setmode('light');
        showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
  
      <Navbar heading = "TextUtils" mode = {mode} toogle={toogle}/>
      <Alert alert={alert}/>
      <div className="container" >
      <TextForm showAlert={showAlert} heading="Write a text to analyze below" />
      </div>
 
    </>
  );
}

export default App;
