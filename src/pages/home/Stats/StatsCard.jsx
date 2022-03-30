import React from 'react'
import { StyledStatsCard } from './StyledStatsCard'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import {
    Add,
    AddCircleOutlineTwoTone,
    ArrowDownwardSharp,
    ArrowDropUp,
    ArrowDropUpTwoTone,
    ArrowUpwardSharp,
    AttachMoneySharp,
    PercentOutlined,
    ShowChart,
} from '@mui/icons-material'
ChartJS.register(ArcElement, Tooltip, Legend)

const StatsCard = ({
    title,
    _new,
    growth,
    count,
    grossIncome,
    netIncome,
    leftIcon,
    rightIcon,
    chartOptions: { positive, negative },
}) => {
    const data = {
        labels: [positive.label, negative.label],
        datasets: [
            {
                label: { title },
                data: [positive.value, negative.value],
                backgroundColor: [
                    positive.color || 'lightgreen',
                    negative.color || 'lightblue',
                ],
            },
        ],
    }

    return (
        <StyledStatsCard>
            {/* TOP LEFT */}
            {leftIcon && <i className="mainIcon left">{leftIcon}</i>}
            {/* TOP RIGHT */}
            {rightIcon && <i className="mainIcon right">{rightIcon}</i>}
            <div>
                <h3>{title}</h3>
            </div>
            <div className="chart">
                <Doughnut data={data} />
            </div>
            <div className="infoGrid">
                {/* BOTTOM LEFT */}
                <div className="left">
                    {count && (
                        <p>
                            Count <span>{count}</span>
                        </p>
                    )}

                    {_new && (
                        <p className="new">
                            New
                            <span>
                                <Add />
                                {_new}
                            </span>
                        </p>
                    )}
                </div>
                {/* BOTTOM RIGHT */}
                <div className="right">
                    <div>
                        {grossIncome && (
                            <p>
                                Gross Income:
                                <span
                                    className={
                                        grossIncome > 0
                                            ? 'positive'
                                            : 'negative'
                                    }
                                >
                                    <AttachMoneySharp />
                                    {grossIncome}
                                </span>
                            </p>
                        )}
                    </div>
                    <div>
                        {netIncome && (
                            <p>
                                Income:
                                <span
                                    className={
                                        netIncome > 0 ? 'positive' : 'negative'
                                    }
                                >
                                    <AttachMoneySharp />
                                    {netIncome}
                                </span>
                            </p>
                        )}
                    </div>
                    <div className="growth">
                        {growth && (
                            <p>
                                Growth
                                <span
                                    className={
                                        growth > 0 ? 'positive' : 'negative'
                                    }
                                >
                                    {growth}%
                                    {growth > 0 ? (
                                        <ArrowUpwardSharp />
                                    ) : (
                                        <ArrowDownwardSharp />
                                    )}
                                </span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </StyledStatsCard>
    )
}

export default StatsCard
