import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { menuNavigation } from "../../router/menuNavigation";

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Navegación</Typography>
            <Box>
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
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contáctanos</Typography>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <WhatsAppIcon sx={{ mr: 1 }} />
              <Typography variant="body1">5493404537574</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <InstagramIcon sx={{ mr: 1 }} />
              <Typography variant="body1">@bari.tecno_</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography variant="body1">
                San Carlos Centro, Santa Fe, Argentina
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Bari Tecno. Todos los derechos
            reservados.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Website created by Ignacio Requena, frontend developer.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
