import React from 'react'
import Revenue from './Revenue/Revenue'
import Stats from './Stats/Stats'
import { StyledHome } from './StyledHome'

const Home = () => {
    return (
        <StyledHome>
            <Stats />
            <Revenue />
        </StyledHome>
    )
}

export default Home
