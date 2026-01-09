"use client"
import { Avatar, Badge, Box, Menu, MenuItem, Typography } from "@mui/material";
import HorizontalSplitRoundedIcon from '@mui/icons-material/HorizontalSplitRounded';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

type THeader = {
    handleToggleDrawer: (newOpen: boolean) => () => void
}

const Header = ({ handleToggleDrawer }: THeader) => {

    const { data: session } = useSession();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        signOut()
    }


    return (
        <Box sx={{
            border: "0.4px solid #bbbb",
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
                <Badge sx={{ cursor: "pointer" }} badgeContent={4} color="primary">
                    <NotificationsNoneIcon color="action" />
                </Badge>
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
                            <img src={session?.user?.image} alt='' />
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
                        <MenuItem sx={{ fontSize: "15px" }}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout} sx={{ fontSize: "15px" }}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;