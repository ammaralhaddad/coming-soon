import React,{useState, useEffect} from "react";
import ClockLoader from "react-spinners/ClockLoader";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import "./App.css";

function App() {
  let [loading, setLoading] = useState(false);

useEffect(()=>{
setLoading(true)
setTimeout(()=>{
setLoading(false)

},5000)

},[])

  return (

    <div className="container">
    {
    loading ?

    <ClockLoader

        color={'var(--primary-color)'}
        loading={loading}
        cssOverride={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :

      <div className="content">
        
        <h1>Coming Soon</h1>
         <h3>
          Question? please contact me through my personal portfolio webpage.
        
        </h3>
        <a href="https://ammarhaddad.com/">
        <button className="button">Conatct Me</button>
        </a> 
      </div>
}
    </div>
      
  );
      
}

export default App;
