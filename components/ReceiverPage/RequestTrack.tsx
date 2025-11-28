"use client"

import { Box, Button, Container, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRequestTrackQuery } from "@/state/services/receiverService/receiverService";
import { useSession } from "next-auth/react";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const RequestTrack = () => {

    // User Session
    const { data: session } = useSession();
    // Request Track Data 
    const { data: reqTrackData, isLoading, error } = useRequestTrackQuery(session?.user?.email);
    const requestData = reqTrackData?.data

    // Menu DropDown
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
            <Box
                sx={{
                    height: "200px",
                    backgroundImage: "url('https://i.ibb.co.com/SwPChsW7/covid-concept-with-colorful-hands.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    p: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: "20%",
                    mb: "3%"
                }}
            >
                <Typography sx={{ fontSize: { lg: "40px", sm: "15px" } }}>Request Track</Typography>
            </Box>
            {/* Table */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Request Title</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Division</TableCell>
                            <TableCell align="right">District</TableCell>
                            <TableCell align="right">Upazila</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            requestData?.length > 0 ? (
                                requestData.map((data: any) => (
                                    <TableRow
                                        key={data._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {data.title}
                                        </TableCell>
                                        <TableCell align="right">{data.category}</TableCell>
                                        <TableCell align="right" component="th" scope="row">
                                            {data.location.division}
                                        </TableCell>
                                        <TableCell align="right" component="th" scope="row">
                                            {data.location.district}
                                        </TableCell>
                                        <TableCell align="right" component="th" scope="row">
                                            {data.location.upazila}
                                        </TableCell>
                                        <TableCell align="right" component="th" scope="row">
                                            {data.location.address}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                                <MoreVertIcon />
                                            </Button>
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
                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                                            </Menu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : ("")
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default RequestTrack;