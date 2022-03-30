import { AccountBalanceTwoTone, PersonTwoTone } from '@mui/icons-material'
import React from 'react'
import StatsCard from './StatsCard'

const Stats = () => {
    return (
        <div className="statsContainer">
            <StatsCard
                title="Users"
                _new="10"
                growth="-14"
                count="1000"
                chartOptions={{
                    positive: { label: 'Active', value: 70, color: 'teal' },
                    negative: { label: 'Inactive', value: 30, color: 'tomato' },
                }}
                leftIcon={<PersonTwoTone />}
                rightIcon={<AccountBalanceTwoTone />}
            />
            <StatsCard
                title="Orders"
                active="70"
                inactive="30"
                _new="10"
                growth="14"
                count="100"
                netIncome="12456"
                chartOptions={{
                    positive: { label: 'Delievered', value: 60, color: 'pink' },
                    negative: {
                        label: 'Processing',
                        value: 10,
                        color: 'lightblue',
                    },
                }}
            />
            <StatsCard
                title="Products"
                _new="10"
                growth="14"
                count="100"
                chartOptions={{
                    positive: { label: 'In Stock', value: 70, color: 'gold' },
                    negative: {
                        label: 'Out Of Stock',
                        value: 30,
                        color: 'violet',
                    },
                }}
            />
        </div>
    )
}

export default Stats
