import React from 'react'
import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

const data = [
    {
        name: 'January',
        Sales: 4000,
        Revenue: 2400,
        Profit: 2400,
    },
    {
        name: 'Febuary',
        Sales: 3000,
        Revenue: 1398,
        Profit: 2210,
    },
    {
        name: 'March',
        Sales: 2000,
        Revenue: 9800,
        Profit: 2290,
    },
    {
        name: 'March',
        Sales: 2780,
        Revenue: 3908,
        Profit: 2000,
    },
    {
        name: 'April',
        Sales: 1890,
        Revenue: 4800,
        Profit: 2181,
    },
    {
        name: 'May',
        Sales: 2390,
        Revenue: 3800,
        Profit: 2500,
    },
    {
        name: 'June',
        Sales: 3490,
        Revenue: 4300,
        Profit: 2100,
    },
]

const RevenueChart = () => {
    return (
        <div className="revenueChart">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area
                        type="monotone"
                        dataKey="Profit"
                        fill="#8884d8"
                        stroke="#8884d8"
                    />
                    <Bar dataKey="Revenue" barSize={30} fill="#413ea0" />
                    <Line
                        type="monotone"
                        dataKey="Sales"
                        stroke="#ff7300"
                        strokeWidth={3}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RevenueChart
