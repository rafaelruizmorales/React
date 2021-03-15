<center><h1>REACT HOOKS</h1></center>
<ul>
    <li><a href="https://github.com/gopinav/React-Tutorials/tree/master/React%20Hooks">Code</a></li>
    <li><a href="https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A">PlayList</a></li>
</ul>

### 💥 useState

##### Theory:

    - useState is related to STATE.
    
    - React components has a built-in state object. 
    
    - The state object is where you store property values that belongs to the component. 
    
    - When the state object changes, the component re-renders.

##### Use:

```javascript
import { useState } from 'react';

const initialValue = '' // initialValue for the item state variable
const [item, setItem] = useState(initialValue)

{item}            // -> access to the state variable
setItem('Shield') // -> function that allows us to change the value of the state variable 

<button onClick={() => setItem('Sword')}>Update item to 'Sword'</button> 
```

```javascript
// If we need to update the state value based on previous state value, we do it like this:

import { useState } from 'react';

const [count, setCount] = useState(0)

const incrementFive() {
    for(let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount + 1) // function with previousState => previousState + 1
    }  
}

return (
    <div>
        Count - {count}
        <button onClick={prevCount => prevCount + 1}>Increment</button>
        <button onClick={incrementFive}>Increment 5</button> 
    </div>
)

```

```javascript
// When we use an object as a state variable... REMEMBER!!!
// We have to update ALL PROPERTIES of the object otherwise they will be lost!
// We can use the JS spread operator ... to help us out here

import { useState } from 'react';

const [name, setName] = useState({firstName: 'Rafael', lastName: 'Ruiz'})

return (
    <div>
        NAME - {name}
        <input 
            type='text' 
            value={name.firstName}
            onChange={ e => setName({...name, firstName: e.target.value}) }
        />
        <input 
            type='text' 
            value={name.lastName}
            onChange={ e => setName({...name, lastName: e.target.value}) }
        />

        <h2>{JSON.stringify(name)}</h2>
    </div>
)

```

<hr style='background-color:#FF0000;border-width:0;color:#FF0000;height:2px;line-height:0;text-align:left;width:100%;'/>

### 💥 useEffect

##### Theory:
    
    - useEffect is related to SIDE EFFECTS.
    
    - A function is said to have side effect if it tries to modify anything outside its body. 

##### Use:

```javascript
// with an array parameter -> It executes once at the beginning and then 
// we define the dependences on when the function in gonna be executed again.
// every time the variable counter changes, the useEffect function is executed.

import { useState, useEffect } from 'react';

const [counter, setCounter] = useState(0)

useEffect( () => {
    console.log('Running!')
}, [counter])

<button onClick={() => setCounter(counter + 1)}>Increment</button>

```

```javascript
// with an empty array as parameter [] -> is going to be executed just once, at the begining

import { useEffect } from 'react';

useEffect( () => {
    console.log('Running!')
}, [])

```

```javascript
// if you do not provide a dependency array, every scheduled useEffect is executed. 
// This means that after every render cycle, every effect defined in the corresponding
// component is executed one after the other based on the positioning in the source code.

import React, { useState, useEffect } from 'react';

function UseEffectComponent() {

    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect( () => {
        console.log("With no dependency array")
    })

    useEffect( () => {
        console.log("With counterA in the dependency array")
    },[counterA])

    useEffect( () => {
        console.log("With empty dependency array")
    },[])

    return (
        <div>
            <p>counterA - {counterA}</p>
            <p>counterB - {counterB}</p>
            <button onClick={() => setCounterA(counterA + 1)}>Increment Counter A</button>
            <button onClick={() => setCounterB(counterB + 1)}>Increment Counter B</button>
        </div>
    );
}

export default UseEffectComponent;

// IN THE BEGINNING OF THE RENDER CYCLE
    //  -> With no dependency array
    //  -> With counterA in the dependency array
    //  -> With empty dependency array

// WHEN - Increment Counter A - BUTTON IS CLICKED
    // -> With no dependency array
    // -> With counterA in the dependency array

// WHEN - Increment Counter B - BUTTON IS CLICKED
    // -> With no dependency array

```

- Part 1: Creating the component

```javascript
// with a return we specify a cleanup method
import React, { useState, useEffect } from 'react'

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('useFffect called')
        window.addEventListener('mousemove', logMousePosition)

        // RETURN -> CLEANUP METHOD!
        return () => { // This return will help us to remove the event listener previously added
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
	}, [])

	return (
		<div>
			Point: ({x}, {y})
		</div>
	)
}

export default HookMouse

```
- Part 2: Using the component. When display is 'false' we are unmounting the component and the cleanup function remove the Event Listener

```javascript
import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
	const [display, setDisplay] = useState(true)
	
    return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <HookMouse />}
		</div>
	)
}

export default 
```

```javascript
// useEffect + useState -> can be used to fetch data from an endpoint!
import React, { useEffect, useState } from 'react';

function UseEffectComponent() {

    useEffect( () => {
        fetchData();
    }, [])

    const [launches, setLaunches] = useState([])

    const fetchData = async () => {
        const data = await fetch('https://api.spacexdata.com/v4/launches')
        const launchesData = await data.json()

        // console.log(launchesData)
        
        setLaunches(launchesData)
    }

    return (
        <div>
            <h2>useEffect</h2>
            {launches.map(launch => {
                return (
                    <p key={launch.id}>{launch.name}</p>
                )
            })}
        </div>
    );
}

export default UseEffectComponent;
```

<hr style='background-color:#FF0000;border-width:0;color:#FF0000;height:2px;line-height:0;text-align:left;width:100%;'/>

### 💥 useContext (context API)

##### Theory:

    - When we have to pass information from one Component to another we use Props, but sometimes
    We have to pass information to a component far down in the Structure and perhaps not all 
    components need to use a specific prop.

    - To avoid this, we can use useContext, creating a context - React.createContext() - on the parent component and 
    wrapping a it with a Context.Provider with a property 'value' that holds what we want to pass.
    
    - Later on we can make use of useContext(TheContext) to get this value.

##### Use:

- In the *parent component*

```javascript
import React from 'react'

import UseContextComponent from './components/useContext/UseContextComponent'

export const UserContext = React.createContext()
export const LangContext = React.createContext()

function App() {
  const userData = {
    name: 'Rafa',
    age: 37,
  }
  
  return (
    <>
      <UserContext.Provider value={userData}>
        <LangContext.Provider value={'ES'}>
          <UseContextComponent />
        </LangContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;

```

- On the *component we want to use the values*

```javascript
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
```

<hr style='background-color:#FF0000;border-width:0;color:#FF0000;height:2px;line-height:0;text-align:left;width:100%;'/>

### 💥 useReducer

##### Theory: 

    - useReducer is another way of work with State variables. We use it like this:
        const [count, dispatch] = useReducer(reducer, initialState)
    
    - The reducer in the function is a reducer function with this structure:
        const reducer = (state, action) => {
            switch (action) {
                ...
            }
        }
    
    - We can invoke actions simply dispatching them
        dispatch('increment')

    - We use useReducer instead of useState...
        1) When We want to store and object or array in the state
        2) When the number of state transitions are many
        3) When there is a complex business logic
        4) When we are using a state variable that works as a global variable

##### Use:

- on *App.js*

```javascript
import React, { useReducer } from 'react'

import ComponentA3 from './components/useReducer/ComponentA3'

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

export const CountContext = React.createContext()

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <ComponentA3 />
      </CountContext.Provider>
    </>
  );
}

export default App;

```

- on *ComponentA1.js*

```javascript
import React from 'react'
import ComponentA2 from './ComponentA2'

function ComponentA1() {
	return (
		<div>
			Component A2<ComponentA2 />
		</div>
	)
}

export default ComponentA1
```

- on *ComponentA2.js*

```javascript
import React from 'react'
import ComponentA3 from './ComponentA3'

function ComponentA2() {
	return (
		<div>
			Component A3<ComponentA3 />
		</div>
	)
}

export default ComponentA1
```

- on *ComponentA3.js*

```javascript
import React, {useContext} from 'react'
import { CountContext } from '../../App';

function ComponentA3() {
  const countContext = useContext(CountContext)
  
  return (
    <div>
      Component A3 {countContext.countState}
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
		<button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
		<button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA3
```

<hr style='background-color:#FF0000;border-width:0;color:#FF0000;height:2px;line-height:0;text-align:left;width:100%;'/>

### 💥 useCallback

##### Theory:

    - useCallback is used in performance and optimisation.
    
    - It reduces the components that are going to be re-render.
    
    - useCallback will return a memoized version of the callback function that only changes if one of the dependencies has changed.
    
    - It is useful when passing callbacks to optimise child components that rely on reference equality to prevent unnecesary renders.

##### Use:
```
    // for the Children. This is NOT useMemo!!! 
    
        export default React.memo(COMPONENT) 
    
    // For the parent using these children...
    
        import { useCallback } from 'react'
        
        const incrementAge = useCallback(() => {
            code to be executed
        }, [dependency])
    
```

- *Title* Component

```javascript
import React from 'react'

function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      useCallback Hook
    </h2>
  )
}

// Check this! we use React.memo(Component) here :)

/* React.memo(Component) is a high order component that will make a functional component 
re-render only if its pros or state do change */
export default React.memo(Title) 
```

- *Count* Component

```javascript
import React from 'react'

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

// Check this! we use React.memo(Component) here :)

/* React.memo(Component) is a high order component that will make a functional component 
re-render only if its pros or state do change */
export default React.memo(Count)
```

- *Button* Component

```javascript
import React from 'react'

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

// Check this! we use React.memo(Component) here :)

/* React.memo(Component) is a high order component that will make a functional component 
re-render only if its pros or state do change */
export default React.memo(Button)
```

- On *ParentComponent.js*

```javascript
import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

    // to not to do more re-renders, We have to use the useCallback, passing a function that have a dependency
    
    // useCallback hook will cash the incrementAge function an return that if age is not incremented
    // if age changes, a new function will be returned
	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

    // useCallback hook will cash the incrementSalary function an return that if salary is not incremented.
    // if salary changes, a new function will be returned
	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	)
}

export default ParentComponent
```

<hr style='background-color:#FF0000;border-width:0;color:#FF0000;height:2px;line-height:0;text-align:left;width:100%;'/>

### 💥 useMemo

##### Theory: 

    - useMemo, as well as useCallback, is used for perform and optimisation.

    - useMemo is basically a way to tell React to not to recalculate values when it is not neccesary,
        specially the ones that takes a lot of time to compute.
    
    - useMemo will re-compute the cash value only when one of the dependencies has changed.

    - if you need to cache a function use useCallback, but if you need to cache the result of an invoked function use useMemo

##### Use:

```
import { useMemo } from 'react'

const myFunction = useMemo(() => {
    // this is the function whose return value needs to be cached
    return cachedValue
}, [dependencies])
```

```javascript
import React, { useState, useMemo } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
    }

    // We use useMemo here to prevent delays when executing the 'incrementTwo' function
    // It is slow because every time the state updates the components re-render and the slow function isEven is called again!!!
    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
            return counterOne % 2 === 0
    }, [counterOne])

	return (
		<div>
			<div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        // NOTE: isEven is not a function so, DO NOT USE isEven(), isEven now stores a value
        <span>{isEven ? 'Even' : 'Odd'}</span> 
			</div>
			<div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default Counter
```

<hr style='background-color:#FF0000;border-width:0;color:#FF0000;height:2px;line-height:0;text-align:left;width:100%;'/>

### 💥 useRef

##### Theory: 

    - useRef allow us to access DOM nodes directly from functional components.

    - We create 'ref variables' by calling useRef and passing in the initialValue.

    - To attach a ref to a DOM node we use the reserved ref attribute.
    
    - To access the node we need to use ref_variable.current


##### Use:

```
    import { useRef } from 'react'

    const inputRef = useRef(null) // null is the initialValue

    inputRef.current.focus()
    inputRef.current.value = 'hola'

    <input type='text' ref={inputRef} />
}

```

```javascript
import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0)
  
    const interValRef = useRef()
  
    useEffect(() => {
        interValRef.current = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
    
        return () => {
            clearInterval(interValRef.current)
        }
    }, [])
  
    return (
        <div>
            HookTimer - {timer} - 
            <button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button>
        </div>
    )
}

export default 
```

<hr style='background-color:#FF0000;border-width:0;color:#FF0000;height:2px;line-height:0;text-align:left;width:100%;'/>

### 💥 Custom Hooks

##### Theory:
    
    - A Custom hook is a Javascrpt function whose name starts with "use". 
    
    - A Custom hook can also call other Hooks if required.
    
    - Main purpose is to be able to re-use logic among components

##### Use:

- on *useInput.js* <small>(The customHook)</small>

```javascript
import { useState } from 'react'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const reset = () => {
    setValue('')
  }
  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value)
    }
  }
  return [value, bind, reset]
}

export default 
```

- on *UserForm.js* <small>(The component using the customHook)</small>

```javascript
import React, { useState } from 'react'
import useInput from '../hooks/useInput';

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = e => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }
	return (
		<div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        {...bindFirstName}
                    />
                </div>
                
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        {...bindLastName}
                    />
                </div>

                <button>Submit</button>
            </form>
		</div>
	)
}

export default UserForm
```