import React from 'react'

async function getLaunchById(id: string) {
    const response = await fetch(`https://api.spacexdata.com/v3/launches/${id}`);
    const data = await response.json()
    return data
}

async function LaunchPage({ params }) {
    const launch: Launch = await getLaunchById(params.launch);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={launch.links.mission_patch} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{launch.mission_name}</h1>
                        <p>{launch.launch_date_local}</p>
                        <p>{launch.rocket.rocket_name}</p>
                        <p className="py-6">{launch.details}</p>
                <iframe className='w-full h-96' src={`https://www.youtube.com/embed/${launch.links.youtube_id}?autoplay=1&mute=1`} name="youtube embed" allow="autoplay; encrypted-media" ></iframe>
            
                    </div>
                </div></div>
        </div>
    )
}

export default LaunchPage