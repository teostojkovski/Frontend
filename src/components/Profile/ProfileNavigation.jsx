import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';

const menu = [
    { title: "Orders", icon: <ShoppingBagIcon /> },
    { title: "Favorites", icon: <FavoriteIcon /> },
    { title: "Address", icon: <LocationOnIcon /> },
    { title: "Payments", icon: <AccountBalanceWalletIcon /> },
    { title: "Notifications", icon: <NotificationsActiveIcon /> },
    { title: "Events", icon: <EventIcon /> },
    { title: "Logout", icon: <LogoutIcon /> }
]

const ProfileNavigation = ({ open, handleClose }) => {
    const isSmallScreen = useMediaQuery('(min-width: 900px)')
    return (
        <div>
            <Drawer variant={isSmallScreen ? "temporary" : "permanent"}
                onClose={handleClose}
                open={open}
                anchor="left"
                sx={{ zIndex: 1 }}
            >
                <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16'>
                    {menu.map((item, i) => <>
                        <div className='px-5 flex items-center space-x-5 cursor-pointer'>
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        {i !== menu.length - 1 && <Divider />}
                    </>)}
                </div>
            </Drawer>
        </div>
    )
}

export default ProfileNavigation