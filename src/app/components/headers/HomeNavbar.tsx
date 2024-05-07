import { Box, Button, Container,Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export function  HomeNavbar() {
    const authMember = null;

    return (
    <div className="home-navbar">
        <Container className="navbar-container">
            <Stack className="menu">
                <Box>
                  <NavLink to="/">
                    <Typography className="logo-text">TinyTots</Typography>
                  </NavLink>
                </Box>
                <Stack className="links">
                     <Box className={"hover-line"}>
                  <NavLink to="/" activeClassName={"underline"}>Home</NavLink>
                </Box>
                <Box className={"hover-line"}>
                  <NavLink to="/products">Products</NavLink>
                </Box>
                {authMember? (
                <Box className={"hover-line"}>
                  <NavLink to="/orders" activeClassName={"underline"}>Orders</NavLink>
                </Box>
                ) : null}  
                  {authMember? (
                <Box className={"hover-line"}>
                  <NavLink to="/member-page" activeClassName={"underline"}>My Page</NavLink>
                </Box>
                ) : null}  
                <Box className={"hover-line"}>
                  <NavLink to="/help" activeClassName={"underline"}>Help</NavLink>
                </Box>
                {/* BASKET */}
                <Box>
                <Button variant="contained" className="login-button">
                    signup
                </Button>
                </Box>
            {!authMember? (
            <Box>
                <Button variant="contained" className="login-button">
                    Login
                </Button>
                </Box>
                ) : (
                <img className="user-avatar"
                src={"/icons/default-user.svg"}
                aria-haspopup={"true"}/>
                )}
                </Stack>
              </Stack>
            <Stack>DETAIL</Stack>
        </Container>
    </div>
    );
}