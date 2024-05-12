import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}
export default function HomeNavbar(props: HomeNavbarProps) {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;

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
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products">Products</NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
            {/* BASKET */}
            <Box>
              <Button variant="contained" className="signup-button">
                signup
              </Button>
            </Box>
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button">
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={"/icons/default-user.svg"}
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>
        <Stack className={"detail"}>
          <Box className={"head-main-txt"}>
            Discover a world of fun with our top quality babytoys
          </Box>
          <Box className={"wel-txt"}>
            Find the perfect toys for your little ones!
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
