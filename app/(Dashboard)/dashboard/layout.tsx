"use client"
import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";
import { Box } from "@mui/material";
import { useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {

    const [isToggle, setIsToggle] = useState<boolean>(false);

    const handleToggleDrawer = (newOpen: boolean) => () => {
        setIsToggle(prev => !prev);
    };

    return (
        <Box sx={{
            display: "flex",
            position: "relative"
        }}>
            <Sidebar isToggle={isToggle} handleToggleDrawer={handleToggleDrawer} />
            <Box sx={{
                flexGrow: 1,
                ml: { lg: "240px", xs: 0 }
            }}>
                <Header handleToggleDrawer={handleToggleDrawer} />
                {children}
            </Box>
        </Box >
    );
};

export default layout;