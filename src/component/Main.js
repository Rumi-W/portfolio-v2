import React from 'react'

import Cards from './Cards'
import Title from './Title'
import './Main.css'

const Main = () => {
    return (
        <div className="Main">
            <div className="title">
                <Title />
            </div>
            <div className="cards">
                <Cards />
            </div>
        </div>
    )
}

export default Main
