"use client"

import { Box, Button, Container, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDonateTrackQuery } from "@/state/services/donorService.tsx/donorService";
import { useSession } from "next-auth/react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const DonateTrack = () => {

    // User Session
    const { data: session } = useSession();
    // Donate Track Data Fetched 
    const { data: donateTrack, isLoading, error } = useDonateTrackQuery(session?.user?.email);
    const donateData = donateTrack?.data
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
                <Typography sx={{ fontSize: { lg: "40px", sm: "15px" } }}>Donate Track</Typography>
            </Box>
            {/* Table */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Campaign Name</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Payment Status</TableCell>
                            <TableCell align="right">Payment Method</TableCell>
                            <TableCell align="right">Donate Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            donateData?.length > 0 ? (
                                donateData.map((data: any) => (
                                    <TableRow
                                        key={data._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {data.title}
                                        </TableCell>
                                        <TableCell align="right">{data.category}</TableCell>
                                        <TableCell align="right" component="th" scope="row">
                                            <Box sx={{
                                                display: "grid",
                                                gridTemplateColumns: "auto 24px auto 24px auto 24px",
                                            }}>
                                                {data.location.division}
                                                <ArrowRightIcon />
                                                <Typography>{data.location.district}</Typography>
                                                <ArrowRightIcon />
                                                <Typography>{data.location.upazila}</Typography>
                                            </Box>
                                            <Typography> {data.location.address}</Typography>
                                        </TableCell>
                                        <TableCell align="right" component="th" scope="row">
                                            {
                                                data.donors.length > 0 ? (
                                                    data.donors.map((donate: any) => (
                                                        <Typography>$ {donate.amount}</Typography>
                                                    ))
                                                ) : (
                                                    "0"
                                                )
                                            }
                                        </TableCell>
                                        <TableCell align="right" component="th" scope="row">
                                            {
                                                data.donors.length > 0 ? (
                                                    data.donors.map((donate: any) => (
                                                        <Typography>{donate.payment_status}</Typography>
                                                    ))
                                                ) : (
                                                    "0"
                                                )
                                            }
                                        </TableCell>
                                        <TableCell align="right" component="th" scope="row">
                                            {
                                                data.donors.length > 0 ? (
                                                    data.donors.map((donate: any) => (
                                                        <Typography>{donate.payment_method}</Typography>
                                                    ))
                                                ) : (
                                                    "0"
                                                )
                                            }
                                        </TableCell>
                                        <TableCell align="right" component="th" scope="row">
                                            {
                                                data.donors.length > 0 ? (
                                                    data.donors.map((donate: any) => (
                                                        <Typography>{new Date(donate.date).toLocaleDateString()}</Typography>
                                                    ))
                                                ) : (
                                                    "0"
                                                )
                                            }
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

export default DonateTrack;