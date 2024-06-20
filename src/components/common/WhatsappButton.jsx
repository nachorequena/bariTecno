import { Button, Link } from "@mui/material";

const WhatsAppButton = () => {
  const phoneNumber = "3404537574";
  const message = "Hola, estoy interesado en..";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link href={url} underline="none" target="_blank" rel="noopener noreferrer">
      <Button variant="contained" size="medium" sx={{ textTransform: "none" }}>
        Comprar
      </Button>
    </Link>
  );
};

export default WhatsAppButton;
