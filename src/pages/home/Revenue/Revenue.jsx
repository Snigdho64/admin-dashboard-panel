import React from 'react'
import RevenueAnalysis from './RevenueAnalysis'
import RevenueChart from './RevenueChart'
import { StyledRevenue } from './StyledRevenue'

const Revenue = () => {
    return (
        <StyledRevenue>
            <RevenueAnalysis />
            <RevenueChart />
        </StyledRevenue>
    )
}

export default Revenue
