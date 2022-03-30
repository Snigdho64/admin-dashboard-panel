import React, { useState } from 'react'
import StyledSidebar from './StyledSidebar'
import {
    Dashboard,
    DashboardCustomizeTwoTone as DBIcon,
    ExpandLess,
    ExpandMore,
    Extension,
    Home,
    Logout,
    Person,
    Settings,
    ShopTwo,
    ViewList,
} from '@mui/icons-material'

const Sidebar = ({ open }) => {
    const [expand, setExpand] = useState({
        one: false,
        two: false,
        three: false,
    })
    return (
        <StyledSidebar className={open ? 'open' : ''}>
            <div>
                <span>Admin Dashboard</span>
            </div>
            <hr />
            <div>
                <ul>
                    <li
                        onClick={() =>
                            setExpand((p) => ({ ...p, one: !p.one }))
                        }
                    >
                        <span>
                            <DBIcon />
                            <span>Main</span>
                            {expand.one ? <ExpandLess /> : <ExpandMore />}
                        </span>
                    </li>
                    {expand.one ? (
                        <ul>
                            <li>
                                <Dashboard /> Dashboard
                            </li>
                        </ul>
                    ) : (
                        <></>
                    )}
                    <li
                        onClick={() =>
                            setExpand((p) => ({ ...p, two: !p.two }))
                        }
                    >
                        <span>
                            <ViewList />
                            <span>List</span>
                            {expand.two ? <ExpandLess /> : <ExpandMore />}
                        </span>
                    </li>
                    {expand.two ? (
                        <ul>
                            <li>
                                <Home />
                                Home
                            </li>
                            <li>
                                <Person />
                                Users
                            </li>
                            <li>
                                <ShopTwo /> Products
                            </li>
                        </ul>
                    ) : (
                        <></>
                    )}
                    <li
                        onClick={() =>
                            setExpand((p) => ({ ...p, three: !p.three }))
                        }
                    >
                        <span>
                            <Extension />
                            <span>Options</span>
                            {expand.three ? <ExpandLess /> : <ExpandMore />}
                        </span>
                    </li>
                    {expand.three ? (
                        <ul>
                            <li></li>
                            <li>
                                <Settings /> Settings
                            </li>
                            <li>
                                <Logout /> Logout
                            </li>
                        </ul>
                    ) : (
                        <></>
                    )}
                </ul>
            </div>
            <div>
                <h3>Color Options</h3>
                <div className="light">
                    <span className="light"></span>
                    <span className="dark"></span>
                </div>
            </div>
        </StyledSidebar>
    )
}

export default Sidebar
