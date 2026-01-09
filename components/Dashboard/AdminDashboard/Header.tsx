"use client"
import { Avatar, Badge, Box, Menu, MenuItem, Typography } from "@mui/material";
import HorizontalSplitRoundedIcon from '@mui/icons-material/HorizontalSplitRounded';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { toggleSidebar } from "@/utils/ResponsiveToggle";
import { useUserRoleQuery } from "@/state/services/userRole/userRole";
import NotificationsIcon from '@mui/icons-material/Notifications';
type THeader = {
    handleToggleDrawer: (newOpen: boolean) => () => void
}

const Header = ({ handleToggleDrawer }: THeader) => {

    const { data: session } = useSession();
    // user backend data
    const { data: roleData, isLoading: roleLoading, error: roleError } = useUserRoleQuery();
    const userInfo = roleData?.data
    // Avatar
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Notification 
    const [notificationEl, setNotificationEl] = useState<null | HTMLElement>(null);
    const openNotification = Boolean(notificationEl);
    const handleNotiClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setNotificationEl(event.currentTarget);
    };
    const handleNotiClose = () => {
        setNotificationEl(null);
    };
    // Logout
    const handleLogout = () => {
        handleClose();
        signOut()
    }


    return (
        <Box sx={{
            border: "1px solid #bbbb",
            p: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <HorizontalSplitRoundedIcon onClick={handleToggleDrawer(true)} />
            <Box sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                gap: "15px"
            }}>
                <Badge onClick={handleNotiClick} sx={{ cursor: "pointer" }} badgeContent={4} color="primary">
                    <NotificationsNoneIcon color="action" />
                </Badge>
                <Menu
                    id="basic-menu"
                    anchorEl={notificationEl}
                    open={openNotification}
                    onClose={handleNotiClose}
                    PaperProps={{
                        sx: {
                            width: 200,      // or "50vw"
                            height: 250,  // or "60vh"
                        },
                    }}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'basic-button',
                        },
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 150 }}>
                        <NotificationsIcon />
                        <Typography>No notification</Typography>
                    </Box>
                </Menu>
                <Box>
                    <Avatar
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)}
                        sx={{ cursor: 'pointer' }}
                    >
                        {session?.user?.image ? (
                            <img src={userInfo.image} alt='' />
                        ) : (
                            <Typography>{session?.user?.name ? session?.user?.name[0] : null}</Typography>
                        )
                        }
                    </Avatar>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            list: {
                                'aria-labelledby': 'basic-button',
                            },
                        }}
                    >
                        <MenuItem onClick={handleClose} sx={{ fontSize: "15px" }}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout} sx={{ fontSize: "15px" }}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;