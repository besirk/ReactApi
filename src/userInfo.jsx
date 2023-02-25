import React from 'react'

const UserInfo = ({user}) => {
    const {id,email,name:{firstname:userName,lastname:userLastName} = {}} = user ||  {};
    // const{firstname} = user.name || {};
  return user ? (
    <div>
      <h1>Info:</h1>  
      <p>{id} </p>
      <p>{userName} {userLastName}</p>
      <p></p>
    </div>
  ) : <p>Loading...</p>
}

export default UserInfo
