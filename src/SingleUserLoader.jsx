import axios from "axios";
import React, { useState,useEffect } from "react"


const SingleUserLoader = ({children}) => {
    const [user,setUser] = useState("");
    const apiLink = "https://fakestoreapi.com/users/1";

    useEffect(() =>{
        (async () => {
            const response = await axios.get(`${apiLink}`);
            setUser(response.data);
        })();
    },[])
  return (
    <>
        {React.Children.map(children, child => {
            if(React.isValidElement(child)){
                return React.cloneElement(child, {user});
            }
            return child;
        })}
    </>
  )
}

export default SingleUserLoader
