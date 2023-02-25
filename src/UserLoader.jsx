import axios from "axios";
import React, { useState,useEffect } from "react"


const UserLoader = ({userId,children}) => {
    const [user,setUser] = useState("");
    const apiLink = "https://fakestoreapi.com/users/";

    useEffect(() =>{
        (async () => {
            const response = await axios.get(`${apiLink}${userId}`);
            setUser(response.data);
        })();
    },[userId])
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

export default UserLoader
