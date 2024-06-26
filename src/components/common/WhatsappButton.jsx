import "./WhatsappButton.css";

const WhatsappButton = () => {
  const phoneNumber = "YOUR_PHONE_NUMBER"; // Reemplaza con tu número de teléfono de WhatsApp
  const message = "Hola, me gustaría obtener más información!"; // Mensaje predefinido

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
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsappButton;
