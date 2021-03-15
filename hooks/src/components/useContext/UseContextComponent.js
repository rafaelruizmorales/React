import React, { useContext } from 'react'

import { UserContext, LangContext } from '../../App'

function UseContextComponent() {
    const user = useContext(UserContext)
    const lang = useContext(LangContext)

    return (
        <div>
            <h2>UseContext</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Lang: {lang}</p>
        </div>
    );
}

export default UseContextComponent;
