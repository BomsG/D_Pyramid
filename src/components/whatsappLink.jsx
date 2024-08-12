import React from "react";

const WhatsAppLink = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
    >
      Chat on WhatsApp
    </a>
  );
};

export default WhatsAppLink;
