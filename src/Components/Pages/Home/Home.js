import React from 'react'


import Slider from './Slider'
import HomeContact from './HomeContact'
import HomeServices from './HomeServices'
import HomeWorks from './HomeWorks'
import HomeClients from './HomeClients'


const Home = () => {
    return (
        <div>Home
            <Slider />
            <HomeContact />
            <HomeServices />
            <HomeWorks />
            <HomeClients />

        </div>
    )
}

export default Home