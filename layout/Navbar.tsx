"use client"
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Avatar, Box, Button, Container, Menu, MenuItem, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { signOut, useSession } from 'next-auth/react';

type Role = "volunteer" | "receiver" | "donor" | "admin"

const Navbar = () => {

    const [toggle, setToggle] = useState<boolean>(false);
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const pathname = usePathname();
    const isDashboardRoute = pathname.startsWith('/admin_dashboard') || pathname.startsWith("/volunteer_dashboar") || pathname.startsWith("/access_denied")

    const { data: session } = useSession();

    const [isRole, setIsRole] = useState<Role>("donor")

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


    const handleToggle = () => {
        setToggle(!toggle)
    }

    const navgicaton = [
        {
            "id": 1,
            "name": "Home",
            "path": "/"
        },
        {
            "id": 2,
            "name": "Campaigns",
            "path": "/campaigns"
        },
        {
            "id": 3,
            "name": "About Us",
            "path": "/about"
        },
        {
            "id": 4,
            "name": "Contact",
            "path": "/contact"
        },

    ]

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 150;
            setIsSticky(!isTop)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <Box
            sx={{
                position: isSticky ? "sticky" : "static",
                top: isSticky ? 0 : "auto",
                zIndex: isSticky ? 50 : "auto",
                backgroundColor: isSticky ? "rgba(255, 255, 255, 0.73)" : "white",
                boxShadow: isSticky ? "0 4px 20px rgba(0,0,0,0.15)" : "none",
                backdropFilter: isSticky ? "blur(12px)" : "none",
                transition: "all 0.3s ease",
                opacity: isSticky ? 1 : 1,
                bgcolor: "white",
                display: isDashboardRoute ? "none" : "block"
            }}
        >
            <Container
                maxWidth={"lg"}
                sx={{
                    zIndex: "50",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    py: "12px"
                }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        justifyItems: "center",
                        gap: "80px"
                    }}>
                    <h1 className='text-3xl'>HelpLink</h1>
                    <ul className='hidden lg:flex items-center gap-5 text-[16px]'>
                        {
                            navgicaton.map((navi) => (
                                <Link className={`${pathname == navi.path && "text-[#FB8500] border-b-2 border-[#FB8500]"} hover:text-[#FB8500]`} key={navi.id} href={navi.path}>
                                    <li className='font-rubik'>{navi.name}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "19px"
                }}>
                    <Box>
                        {
                            session ? (
                                <>
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
                                        <Link href={"/profile"}>
                                            <MenuItem>Profile</MenuItem>
                                        </Link>
                                        {
                                            isRole === "receiver" && (
                                                <>
                                                    <Link href={"/help_request"}>
                                                        <MenuItem>Help Request</MenuItem>
                                                    </Link>
                                                    <Link href={"/request_track"}>
                                                        <MenuItem>Request Track</MenuItem>
                                                    </Link>
                                                </>
                                            )
                                        }
                                        {
                                            isRole === "donor" && (
                                                <>
                                                    <Link href={"/donate_track"}>
                                                        <MenuItem>Donate Track</MenuItem>
                                                    </Link>
                                                </>
                                            )
                                        }
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <Link href={"/signin"}>
                                    <Button
                                        type='submit'
                                        variant='outlined'
                                        sx={{
                                            width: "100%",
                                            bgcolor: "#fb8500",
                                            borderColor: "#fb8500",
                                            color: "white",
                                            '&:hover': {
                                                bgcolor: "#fb8500",
                                                borderColor: "#fb8500",
                                            },
                                        }}
                                    >
                                        Login
                                    </Button>
                                </Link>
                            )
                        }
                    </Box>
                    <Box>
                        {
                            toggle ? (
                                <CloseIcon
                                    onClick={handleToggle}
                                    sx={{
                                        display: {

                                            sm: "inline-block",
                                            md: "inline-block",
                                            lg: "none"
                                        }
                                    }}
                                />
                            ) : (
                                <HorizontalSplitIcon
                                    onClick={handleToggle}
                                    sx={{
                                        display: {
                                            sm: "inline-block",
                                            md: "inline-block",
                                            lg: "none"
                                        }
                                    }}
                                />
                            )
                        }
                    </Box>
                </Box>
                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        height: "100vh",
                        width: "75%",
                        background: "#B26E20",
                        color: "white",
                        zIndex: 999,
                        p: "25px",
                        display: { xs: "flex", lg: "none" },
                        flexDirection: "column",
                        gap: "30px",
                        fontSize: "19px",
                        transform: toggle ? "translateX(0)" : "translateX(-100%)",
                        transition: "transform 0.7s ease"
                    }}>
                    {
                        navgicaton.map((navi) => (
                            <Link className={`${pathname == navi.path && "text-white border-b-2 border-[#000000]"} hover:text-[#FB8500]`} key={navi.id} href={navi.path}>
                                <Typography className='font-rubik'>{navi.name}</Typography>
                            </Link>
                        ))
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;