"use client"

import { Box, Typography } from "@mui/material";


import { AdminRoutes } from "@/utils/NavigationRoute";
import Link from "next/link";

const Sidebar = () => {


    return (
        <Box
            sx={{
                border: "1px solid #bbbbbb",
                width: { sm: "50%", lg: "16%" },
                height: "100vh",
                position: { xs: "absolute", sm: "absolute", lg: "static" },
                bgcolor: "#fff",
                // p: 2,
            }}
        >
            <Box
                sx={{ textAlign: 'center' }}
            >
                <Typography sx={{ fontSize: "25px", my: "5px", p: 1, }}>HelpLink</Typography>
            </Box>
            {
                AdminRoutes.map(nav => (
                    <Link key={nav.id} href={nav.path}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            p: 1,
                            borderRadius: 1,
                            cursor: "pointer",
                            transition: "0.3s",
                            "&:hover": {
                                bgcolor: "#f5f5f5",
                            },
                        }}>
                            <nav.icon />
                            <Typography>{nav.name}</Typography>
                        </Box>
                    </Link>
                ))
            }
        </Box>
    );
};

export default Sidebar;