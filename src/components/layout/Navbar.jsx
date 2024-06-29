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
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "../common/CartWidget";
import { menuNavigation } from "../../router/menuNavigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./Navbar.css";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
      <AppBar
        position="fixed"
        className="appBar"
        sx={{
          bgcolor: "#A6A6A6",
        }}
      >
        <Toolbar className="toolBar">
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
              >
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/dq5eikj1o/image/upload/v1719033041/logo-bari-tecno_yc0hin.jpg"
                    alt="logo"
                    style={{ height: "70px" }}
                  />
                </Link>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
            </>
          ) : (
            <>
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dq5eikj1o/image/upload/v1719033041/logo-bari-tecno_yc0hin.jpg"
                  alt="logo"
                  style={{ height: "70px" }}
                />
              </Link>
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexGrow: 1,
                }}
              >
                {menuNavigation.map(({ id, text, path }) => (
                  <Link key={id} to={path} className="navLink">
                    <Typography variant="h6">{text}</Typography>
                  </Link>
                ))}
              </Box>
              <Link to="/auth" className="navLink">
                <AccountCircleIcon />
              </Link>
            </>
          )}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CartWidget />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          className="drawerList"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuNavigation.map(({ id, text, path }) => (
              <ListItem
                button
                key={id}
                component={Link}
                to={path}
                className="drawerLink"
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <Divider />
            <ListItem
              to="/auth"
              className="drawerLink"
              component={Link}
              key={"auth"}
            >
              <ListItemText primary="Iniciar sesión" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
