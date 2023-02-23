import axios from "axios";
import React, { useState,useEffect } from "react"


const CatFactLoader = ({children}) => {
    const [catFact,setCatFact] = useState("");

    useEffect(() =>{
        (async () => {
            const response = await axios.get("https://catfact.ninja/fact");
            setCatFact(response.data);
        })();
    },[])
  return (
    <>
        {React.Children.map(children, child => {
            if(React.isValidElement(child)){
                return React.cloneElement(child, {catFact});
            }
            return child;
        })}
    </>
  )
}

export default CatFactLoader
