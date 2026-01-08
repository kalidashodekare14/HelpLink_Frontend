"use client"
import { Box, Drawer, Stack, Typography, } from "@mui/material";
import { AdminRoutes } from "@/utils/NavigationRoute";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from '@mui/icons-material/Home';
type sidebarProps = {
    isToggle: boolean,
    handleToggleDrawer: (newOpen: boolean) => () => void
}

const Sidebar = ({ isToggle, handleToggleDrawer }: sidebarProps) => {

    const drawerWidth = 240;
    const pathname = usePathname();

    const drawerContent = (
        <Stack
            sx={{
                p: 1,
                bgcolor: "#EBF7F7",
                height: "100dvh"
            }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
        >
            <Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: "25px", p: 1, }}>HelpLink</Typography>
                </Box>
                <Stack spacing={1}>
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
                                        bgcolor: "#C4DDD9",
                                    },
                                    bgcolor: pathname === nav.path ? "#C4DDD9" : "inherit"
                                }}>
                                    <nav.icon />
                                    <Typography>{nav.name}</Typography>
                                </Box>
                            </Link>
                        ))
                    }
                </Stack>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 1,
                borderRadius: 1,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                    bgcolor: "#C4DDD9",
                },
                border: "1px solid #C4DDD9"
            }}>
                <HomeIcon />
                <Typography>Home</Typography>
            </Box>
        </Stack>
    );

    return (
        <>
            <Drawer
                variant="temporary"
                open={isToggle}
                onClose={handleToggleDrawer(false)}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", lg: "none" },
                    "& .MuiDrawer-paper": { width: drawerWidth },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* Permanent Desktop Sidebar */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", lg: "block" },
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </>
    );
};

export default Sidebar;

{/* <Box
            sx={{
                border: "1px solid #bbbbbb",
                width: "16%",
                height: "100vh",
                bgcolor: "#EBF7F7",
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
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
                                bgcolor: "#C4DDD9",
                            },
                        }}>
                            <nav.icon />
                            <Typography>{nav.name}</Typography>
                        </Box>
                    </Link>
                ))
            }
        </Box> */}