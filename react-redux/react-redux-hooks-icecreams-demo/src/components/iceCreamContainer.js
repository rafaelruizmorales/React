import React from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { buyIceCream } from '../redux'

const IceCreamContainer = () => {
  
  const numOfIceCreams = useSelector(store => store.iceCream.numOfIceCreams)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of iceCreams - {numOfIceCreams} </h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default IceCreamContainer