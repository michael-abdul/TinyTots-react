import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";
export default function Statistics(){
return (
    <div className={"static-frame"}>
        <Container>
            <Stack className="info">
                <Stack className="static-box">
                    <Box className="static-num">7,000</Box>
                    <Box className="static-text">Toy options</Box>
                </Stack>
                <Divider height="64" width="2" bg="#ff0000"/>
                <Stack className="static-box">
                    <Box className="static-num">9,000+</Box>
                    <Box className="static-text">Toy</Box>
                </Stack>
                <Divider height="64" width="2" bg="#ff0000"/>
                <Stack className="static-box">
                    <Box className="static-num">250,000+</Box>
                    <Box className="static-text">Happy Customers</Box>

                </Stack>
            </Stack>
        </Container>
    </div>
)
}