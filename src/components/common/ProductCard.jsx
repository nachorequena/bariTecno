import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import WhatsAppButton from "./whatsappButton";

export const ProductCard = ({ img, title, description, price, id }) => {
  return (
    <Card sx={{ width: 350, height: 400, backgroundColor: "white" }}>
      <CardMedia
        sx={{ height: 140, objectFit: "cover" }}
        image={img}
        title="green iguana"
      />
      <CardContent sx={{ height: 150 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {title}
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign={"center"}>
          {description}
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          ${price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/item/${id}`}>
          <Button
            variant="contained"
            size="medium"
            sx={{ textTransform: "none" }}
          >
            Ver detalle
          </Button>
        </Link>
        <WhatsAppButton />
      </CardActions>
    </Card>
  );
};
