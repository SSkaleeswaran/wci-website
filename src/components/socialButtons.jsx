

const SocialButtons = () => {
  const whatsappNumber = "916379891812";
  const instagramUrl = "https://www.instagram.com/your_instagram/";

  return (
    <div className="social-buttons">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn whatsapp"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Instagram */}
      <a
        href={instagramUrl}

        target="_blank"
        rel="noopener noreferrer"
        className="social-btn instagram"
        aria-label="Follow us on Instagram"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};

export default SocialButtons;