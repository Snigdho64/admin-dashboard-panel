import {
    ArrowCircleLeftOutlined,
    ArrowCircleRightOutlined,
    FeedTwoTone,
    History,
    MessageTwoTone,
    Notifications,
    Restore,
} from '@mui/icons-material'
import { Badge, BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import SpeedDialer from './SpeedDialer'
import { StyledNavbar } from './StyledNavbar'

const Navbar = ({ open, setOpen }) => {
    const handleToggle = () => setOpen(!open)
    const [value, setValue] = React.useState('recents')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <StyledNavbar>
            <div className="left">
                <h3>Application</h3>
                <span onClick={handleToggle}>
                    {open ? (
                        <ArrowCircleRightOutlined />
                    ) : (
                        <ArrowCircleLeftOutlined />
                    )}
                </span>
            </div>
            <div className="center">
                <BottomNavigation
                    sx={{ width: 500 }}
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction
                        label="Message"
                        value="message"
                        icon={
                            <Badge badgeContent={3} color="primary">
                                <MessageTwoTone />
                            </Badge>
                        }
                    />
                    <BottomNavigationAction
                        label="History"
                        value="history"
                        icon={
                            <Badge badgeContent={3} color="primary">
                                <History />
                            </Badge>
                        }
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        icon={
                            <Badge badgeContent={3} color="primary">
                                <Notifications />
                            </Badge>
                        }
                    />
                </BottomNavigation>
            </div>
            <div className="right">
                <SpeedDialer />
            </div>
        </StyledNavbar>
    )
}

export default Navbar
