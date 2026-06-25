import "./css/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>Contact Us</h1>
      <p>Let's build your next website together.</p>

      <div className="contact-container">
        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>+91 85870 97735</p>
        </div>

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>support4devsgmail.com</p>
        </div>

        <div className="contact-card">
          <h3>📍 Location</h3>
          <p>Delhi, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
