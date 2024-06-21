// /src/components/common/ProductCard.jsx
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import WhatsAppButton from "./WhatsAppButton";

export const ProductCard = ({ img, title, description, price, id }) => {
  return (
    <Card sx={{ width: 350, height: 450, backgroundColor: "white", margin: 2 }}>
      <CardMedia
        sx={{ height: 140, objectFit: "contain" }} // Ajustado para contener la imagen
        image={img}
        title={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          {description}
        </Typography>
        <Typography variant="h6" textAlign={"center"} marginTop={1}>
          ${price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
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

export default ProductCard;
