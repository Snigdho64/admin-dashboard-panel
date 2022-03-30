import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import {
    AccountCircleSharp,
    AccountCircleTwoTone,
    HomeSharp,
    Logout,
    Person,
    ShopTwo,
} from '@mui/icons-material'

const actions = [
    { icon: <HomeSharp />, name: 'Home' },
    { icon: <Person />, name: 'Users' },
    { icon: <ShopTwo />, name: 'Products' },
    { icon: <Logout />, name: 'Logout' },
]

export default function SpeedDialer() {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                icon={
                    <SpeedDialIcon
                        openIcon={<AccountCircleSharp />}
                        icon={<AccountCircleTwoTone />}
                    />
                }
                direction="down"
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={handleClose}
                    />
                ))}
            </SpeedDial>
        </>
    )
}
