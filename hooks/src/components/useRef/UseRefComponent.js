import React, { useEffect, useRef } from 'react'

function UseRefComponent() {
    const inputRef = useRef(null) // null is the initialValue

    // Making use of useEffect to add a sideEffect that will be executed only once at the beginning ( dependency is an empty array [] )
    useEffect(() => {
        // We are going to apply a focus to the input in this example

        /* The current variable is something that React does. It will sent the current property to the correspondant DOM node. 
        With current is how we access to the input element! */
        
        inputRef.current.focus()
    }, [])

    return (
        <input type='text' ref={inputRef} />
    )
}

export default UseRefComponent;