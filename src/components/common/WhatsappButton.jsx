import "./WhatsappButton.css";

const WhatsappButton = () => {
  const phoneNumber = "5493404537574";
  const message = "Hola, me gustaría saber sobre..";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src="https://res.cloudinary.com/dq5eikj1o/image/upload/v1719420132/logo_whatsapp_wqqw5x.png"
        alt="logo de WhatsApp"
      />
    </a>
  );
};

export default WhatsappButton;
