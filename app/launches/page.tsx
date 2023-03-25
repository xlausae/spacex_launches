import Card from '@/Components/Card';
import React from 'react'

async function getLaunches() {
    const response = await fetch('https://api.spacexdata.com/v3/launches');
    const data = await response.json()
    return data
}

async function Launches() {
    const launches: Launch[] = await getLaunches();
    console.log(launches)

    return (<div className='grid grid-cols-4 gap-7'>
        {launches.map((item) => <Card 
                id={item.flight_number}
                title={item.mission_name} 
                image={item.links.mission_patch} 
                rocketName={item.rocket.rocket_name} />)}
    </div>
    )
}

export default Launches