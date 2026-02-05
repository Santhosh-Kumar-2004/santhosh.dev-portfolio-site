import { useState } from "react";
import { FaEnvelope, FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setStatus("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
      console.log(error)
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner contact-wrapper">

        {/* LEFT SIDE */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <header className="contact-header">
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">
              Let’s Work <br /> Together
            </h2>
            <div className="header-line"></div>
          </header>

          <p className="contact-intro">
            Have a project, idea, or opportunity in mind?  
            I’m always open to meaningful collaborations.
          </p>

          <div className="contact-methods">
            <a href="mailto:santhoshkumarv12136@gmail.com" className="email-card">
              <FaEnvelope />
              <span>santhoshkumarv12136@gmail.com</span>
              <FaArrowRight className="arrow" />
            </a>

            <div className="social-mini-grid">
              <a href="#" className="social-pill"><FaGithub /> GitHub</a>
              <a href="#" className="social-pill"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE – CUSTOM FORM */}
        <motion.div
          className="contact-form-glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">

            {/* NAME */}
            <input
              type="text"
              name="entry.1111111111"   // 🔁 Replace with real entry ID
              placeholder="Your Name"
              required
            />

            {/* EMAIL */}
            <input
              type="email"
              name="entry.2222222222"   // 🔁 Replace with real entry ID
              placeholder="Your Email"
              required
            />

            {/* MOBILE */}
            <input
              type="email"
              name="entry.2222222222"   // 🔁 Replace with real entry ID
              placeholder="Your Mobile Number"
            />

            {/* MESSAGE */}
            <textarea
              name="entry.3333333333"   // 🔁 Replace with real entry ID
              placeholder="Your Message"
              rows="5"
              required
            />

            <button type="submit">
              Send Message <FaArrowRight />
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
