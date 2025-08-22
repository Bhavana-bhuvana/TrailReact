import "./Style/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <video autoPlay loop muted className="bg-video">
        <source src="https://www.w3schools.com/howto/forest.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
