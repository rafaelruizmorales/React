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