import { useState } from "react";
import { FaEnvelope, FaArrowRight, FaLinkedin, FaGithub, FaCheckCircle } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfKqMgrNd88UFNobr2AnBAaLJmd59X5oN0elc8ePP4oid5ruw/formResponse";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setStatus("success");
      e.target.reset();
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner contact-wrapper">
        
        {/* LEFT SIDE */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <header className="contact-header">
            <span className="section-subtitle">Connect</span>
            <h2 className="section-title">Let’s Create <br /> Something New</h2>
            <div className="header-line"></div>
          </header>

          <p className="contact-intro">
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>

          <div className="contact-methods">
            <a href="mailto:santhoshkumarv12136@gmail.com" className="email-link-card">
              <div className="icon-box"><FaEnvelope /></div>
              <div className="text-box">
                <small>Mail me at</small>
                <span>santhoshkumarv12136@gmail.com</span>
              </div>
              <FaArrowRight className="arrow-icon" />
            </a>

            <div className="social-row">
              <a href="#" className="social-tag"><FaGithub /> GitHub</a>
              <a href="#" className="social-tag"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE – CUSTOM FORM */}
        <motion.div 
          className="contact-form-glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-shimmer"></div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <motion.div custom={1} variants={inputVariants} initial="hidden" whileInView="visible">
              <input type="text" name="entry.2135531276" placeholder="Full Name" required />
            </motion.div>

            <motion.div custom={2} variants={inputVariants} initial="hidden" whileInView="visible">
              <input type="email" name="entry.249094074" placeholder="Email Address" required />
            </motion.div>

            <motion.div custom={3} variants={inputVariants} initial="hidden" whileInView="visible">
              <input type="tel" name="entry.180404367" placeholder="Mobile Number" />
            </motion.div>

            <motion.div custom={4} variants={inputVariants} initial="hidden" whileInView="visible">
              <textarea name="entry.1723726827" placeholder="Tell me about your project..." rows="4" required />
            </motion.div>

            <motion.button 
              type="submit" 
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "sending" ? "Dispatching..." : "Send Message"} 
              <FaArrowRight className="btn-arrow" />
            </motion.button>

            <AnimatePresence>
              {status === "success" && (
                <motion.p 
                  className="status-msg success"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <FaCheckCircle /> Message sent! I'll be in touch soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p className="status-msg error">
                  Oops! Something went wrong.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

      </div>
    </section>
  );
}