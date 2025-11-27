"use client"
import { Box } from "@mui/material";
import HorizontalSplitRoundedIcon from '@mui/icons-material/HorizontalSplitRounded';

const Header = () => {
    return (
        <Box sx={{
            border: "1px solid #bbbb",
            p: "10px"
        }}>
            <HorizontalSplitRoundedIcon />
        </Box>
    );
};

export default Header;