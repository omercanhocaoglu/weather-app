import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';


function Clock () {
  
const [clock, setClock] = useState();

const date = new Date().toDateString();

useEffect( () => {
    setInterval( () => {
         const time = new Date().toLocaleTimeString();

         setClock(time)
    }, 1000);
} );




return (
    
    
    <div className="row justify-content-center mt-5 font-monospace">
        
        <div className="col-md-4">

            {clock} {date}

        </div>
        
    </div>
  )
}

export default Clock;