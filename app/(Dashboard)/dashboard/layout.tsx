import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";
import { Box } from "@mui/material";

const layout = ({ children }: { children: React.ReactNode }) => {

    

    return (
        <Box sx={{
           display: "flex",
        }}>
            <Sidebar />
            <Box sx={{
                width: "100%",
            }}>
                <Header />
                {children}
            </Box>
        </Box>
    );
};

export default layout;