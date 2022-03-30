import {
    ArrowDownward,
    ArrowUpward,
    TrendingDown,
    TrendingUp,
} from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import React from 'react'
import { StyledAnalysis } from './StyledAnalysis'

const RevenueAnalysis = () => {
    const UpArrow = () => <ArrowUpward color="success" />
    const DownArrow = () => <ArrowDownward color="warning" />
    const UpTrending = () => <TrendingUp color="success" />
    const DownTrending = () => <TrendingDown color="warning" />
    return (
        <StyledAnalysis className="revenueAnalysis">
            <div className="total">
                <div>
                    <p>Total Revenue</p>
                    <span>Rs. 12354</span>
                </div>
                <div>
                    <p>Total Sales</p>
                    <span>Rs. 1223311</span>
                </div>
            </div>
            <div className="progress">
                <div>
                    <p>
                        Gross <span>Rs.34000</span>
                    </p>
                    <p>
                        Net <span>Rs.25000</span>
                    </p>
                    <p>
                        Growth <span>18%</span>
                        <UpArrow />
                    </p>
                </div>
                <h3>{Math.round((365 / 365) * 100)}%</h3>
                <CircularProgress
                    variant="determinate"
                    value={(365 / 365) * 100}
                    dir="right"
                    color="success"
                    size={150}
                />
                <div>
                    <p>
                        Gross <span>Rs.34000</span>
                    </p>
                    <p>
                        Net <span>Rs.34000</span>
                    </p>
                    <p>
                        Growth <span>18%</span>
                        <DownArrow />
                    </p>
                </div>
            </div>
            <div className="summary">
                <div className="today">
                    <p>Today</p>
                    <div>
                        <p>
                            Visitors<span>345</span>
                            <DownTrending />
                        </p>
                        <p>
                            Customers<span>345</span>
                            <UpTrending />
                        </p>
                        <p>
                            Sales<span>345</span>
                            <UpTrending />
                        </p>
                    </div>
                </div>
                <div className="thisWeek">
                    <p>This Week</p>
                    <div>
                        <p>
                            Visitors<span>34543</span>
                            <UpTrending />
                        </p>
                        <p>
                            Customes<span>12343</span>
                            <UpTrending />
                        </p>
                        <p>
                            Sales<span>12321</span>
                            <DownTrending />
                        </p>
                    </div>
                </div>
                <div className="this month">
                    <p>This Month</p>
                    <div>
                        <p>
                            Visitors<span>342350</span>
                            <DownTrending color="warning" />
                        </p>
                        <p>
                            Customes<span>12345</span>
                            <DownTrending color="warning" />
                        </p>
                        <p>
                            Sales<span>12323</span>
                            <DownTrending color="warning" />
                        </p>
                    </div>
                </div>
            </div>
        </StyledAnalysis>
    )
}

export default RevenueAnalysis
