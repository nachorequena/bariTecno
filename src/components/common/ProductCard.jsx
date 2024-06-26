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

export const ProductCard = ({ img, title, description, price, id }) => {
  return (
    <Card sx={{ width: 350, height: 500, backgroundColor: "white", margin: 1 }}>
      <CardMedia
        component="img"
        sx={{ height: 250, objectFit: "contain" }}
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
          <strong>${price}</strong>
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="medium"
            sx={{ textTransform: "none" }}
          >
            ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
