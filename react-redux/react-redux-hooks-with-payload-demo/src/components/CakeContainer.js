import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { buyCake } from '../redux'

const CakeContainer = () => {  
  const numOfCakes = useSelector(store => store.numOfCakes)
  const dispatch = useDispatch()

  const [cakesToSell, setCakesToSell] = useState(1)

  return (
    <div>
      <h2>Number of cakes: {numOfCakes} </h2>
      <input type="text" value={cakesToSell} onChange={e => setCakesToSell(e.target.value)}/>
      <button onClick={() => dispatch(buyCake(cakesToSell))}>Buy {cakesToSell} Cake(s)</button>
    </div>
  );
}

export default CakeContainer