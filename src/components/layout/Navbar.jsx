import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "../common/CartWidget";
import { menuNavigation } from "../../router/menuNavigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./Navbar.css";
import { useState } from "react";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dq5eikj1o/image/upload/v1711177381/149555709-dise_C3_B1o-de-vectores-de-comercio-electr_C3_B3nico-de-plantilla-de-logotipo-de-carro-de-tecnolog_C3_ADa-vector_mverjx-removebg-preview_ex459h.png"
              alt="logo"
              style={{ height: "40px" }}
            />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              {menuNavigation.map(({ id, text, path }) => (
                <Link
                  key={id}
                  to={path}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    margin: "0 10px",
                  }}
                >
                  <Typography variant="h6">{text}</Typography>
                </Link>
              ))}
            </Box>
          )}
          <CartWidget />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuNavigation.map(({ id, text, path }) => (
              <ListItem button key={id} component={Link} to={path}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
