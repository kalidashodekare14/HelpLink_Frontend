"use client"

import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Container, Typography } from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import Image from "next/image";

const AskQuestion = () => {
    return (
        <Container maxWidth={"lg"}>
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", lg: "row" },
                alignItems: "center",
                gap: "40px",
                my: "30px"
            }}>
                <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
                    <Typography sx={{ fontSize: "15px", color: "#FB8500" }}>Frequently Asked Questions</Typography>
                    <Typography sx={{ fontSize: { xs: "40px", lg: "45px" }, lineHeight: "1.3", fontWeight: "600" }}>You can ask any question</Typography>
                    <Accordion sx={{
                        my: "10px",
                        borderRadius: "10px",
                        p: "12px"
                    }}>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography sx={{ fontWeight: "500", fontSize: "17px" }} component="span">What kind of recipes can i find on your website?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#4e4e4e", }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nihil? Dolore temporibus, non amet vitae repellendus tempora. Hic, soluta adipisci.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        my: "10px",
                        borderRadius: "10px",
                        p: "12px"
                    }}>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography sx={{ fontWeight: "500", fontSize: "17px" }} component="span">Do you offer cooking  tips and techniques</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#4e4e4e", }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nihil? Dolore temporibus, non amet vitae repellendus tempora. Hic, soluta adipisci.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        my: "10px",
                        borderRadius: "10px",
                        p: "12px"
                    }}>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography sx={{ fontWeight: "500", fontSize: "17px" }} component="span">How frequently do you update your recipe collection?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#4e4e4e", }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nihil? Dolore temporibus, non amet vitae repellendus tempora. Hic, soluta adipisci.
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box sx={{ width: { xs: "100%", lg: "50%" }, display: "flex", height: { xs: "300px", lg: "500px" }, gap: "10px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Image
                            className="w-full  h-full lg:h-[50%] border-8 border-[#c9c9c9] rounded-2xl"
                            src="/Home/question/img1.jpeg"
                            width={500}
                            height={300}
                            alt=""
                        />
                        <Image
                            className="w-full h-full lg:h-[50%] border-8 border-[#c9c9c9] rounded-2xl"
                            src="/Home/question/img2.jpg"
                            width={500}
                            height={300}
                            alt=""
                        />
                    </Box>
                    <Image
                        className="w-full lg:w-[50%]  border-8 border-[#c9c9c9] rounded-2xl"
                        src="/Home/question/img1.jpg"
                        width={500}
                        height={300}
                        alt=""
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default AskQuestion;