"use client"
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import './CampaignFilter.css';

type locationType = {
    divisions: string[],
    districts: string[],
    upazilas: string[],
    setDivision: (value: string) => void,
    setDistrict: (value: string) => void,
    setUpazila: (value: string) => void,
    division: string
    district: string
    upazila: string,
    handleSearch: (searchValue: string) => void
}


const CampaignFilter = ({ divisions, districts, upazilas, setDivision, setDistrict, setUpazila, division, district, upazila, handleSearch }: locationType) => {

    const [searchValue, setSearchValue] = useState<string>("");


    return (
        <div>
            <Box
                className="banner"
                sx={{
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    p: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    px: { xs: "2%", lg: "20%" },
                }}
            >
                <Box sx={{
                    border: "1px solid #bbbb",
                    my: "10px",
                    p: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    alignItems: "center",
                    gap: "10px",
                    bgcolor: "white",
                    width: "100%",
                }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        position: "relative"
                    }}>
                        <TextField onChange={(e) => setSearchValue(e.target.value)} sx={{
                            width: "100%",
                            zIndex: "10px"
                        }}
                            size="small"
                            id="outlined-basic"
                            label="Search..."
                            variant="outlined" />
                        <Box onClick={() => handleSearch(searchValue)} sx={{
                        }}>
                            <SearchIcon sx={{
                                position: "absolute",
                                right: "5px",
                                top: "5px",
                                fontSize: "30px",
                            }} />
                        </Box>
                    </Box>
                    <Box sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr" },
                        gap: "5px"
                    }}>
                        <FormControl fullWidth>
                            <InputLabel size="small" id="demo-simple-select-label">Division</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={division}
                                label="Age"
                                size="small"
                                onChange={(e) => setDivision(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    divisions.map((div: string) => (
                                        <MenuItem key={div} value={div}>{div}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <FormControl fullWidth disabled={!division}>
                            <InputLabel size="small" id="demo-simple-select-label">District</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={district}
                                label="Age"
                                size="small"
                                onChange={(e) => setDistrict(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    districts.map((dist: string) => (
                                        <MenuItem key={dist} value={dist}>{dist}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <FormControl fullWidth disabled={!district}>
                            <InputLabel size="small" id="demo-simple-select-label">Upazila</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={upazila}
                                label="Age"
                                size="small"
                                onChange={(e) => setUpazila(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    upazilas.map((upz: string) => (
                                        <MenuItem key={upz} value={upz}>{upz}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel size="small" id="demo-simple-select-label">Situation</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                size="small"
                            // onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>High</MenuItem>
                                <MenuItem value={20}>Medium</MenuItem>
                                <MenuItem value={30}>Low</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </div >
    );
};

export default CampaignFilter;