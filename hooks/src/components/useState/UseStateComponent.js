import React, { useState } from 'react';

function UseStateComponent() {

    const [number, setNumber] = useState(10);

    const handleChangeNumber = e => setNumber(e.target.value); 

    return (
        <div>
            <h2>UseState</h2>
            <input type='text' value={number} onChange={handleChangeNumber}/>
        </div>
    );
}

export default UseStateComponent;