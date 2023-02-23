import React from 'react'

const CatFactInfo = ({catFact}) => {
    const {fact} = catFact ||  {};
  return catFact ? (
    <div>
      <h1>Here's a fact about cats:</h1>
      <p>{fact} </p>
    </div>
  ) : <p>Loading...</p>
}

export default CatFactInfo
