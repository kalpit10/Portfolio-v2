import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import AlertBox from "./Alert";

// Contact form component using Bootstrap styling
const ContactForm = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(false);

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);

    // Send the form using EmailJS
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setAlert(true);
          form.current.reset();
          setIsSubmitting(false);
          setTimeout(() => {
            setAlert(false);
          }, 2000);
        },
        (error) => {
          // On failure
          console.error("FAILED...", error.text);
          setAlert(false);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        {/* Form Card */}
        <div
          className="card shadow"
          style={{
            backgroundColor: "#1f2029",
            borderColor: "#6f42c1",
            maxWidth: "550px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top Accent Line */}
          <div
            style={{
              height: "3px",
              background: "linear-gradient(to right, #00c8ff, #8a2be2)",
            }}
          ></div>

          {/* Card Header */}
          <div
            className="card-header border-0"
            style={{
              backgroundColor: "transparent",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Alert Box inside container, above form card */}
            {alert && <AlertBox />}
            <h2 className="text-center text-white mb-2">Get in Touch</h2>
            <p className="text-center text-muted mb-0">
              I'll get back to you as soon as possible
            </p>
          </div>

          {/* Card Body with Form */}
          <div
            className="card-body"
            style={{ position: "relative", zIndex: 1 }}
          >
            <form ref={form} onSubmit={sendEmail}>
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="name"
                  name="user_name"
                  style={{
                    backgroundColor: "#2a2b38",
                    borderColor: "#6f42c1",
                    color: "white",
                  }}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  name="user_email"
                  style={{
                    backgroundColor: "#2a2b38",
                    borderColor: "#6f42c1",
                    color: "white",
                  }}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label htmlFor="message" className="form-label text-white">
                  Your Message
                </label>
                <textarea
                  className="form-control form-control-lg"
                  id="message"
                  name="message"
                  rows="5"
                  style={{
                    backgroundColor: "#2a2b38",
                    borderColor: "#6f42c1",
                    color: "white",
                    resize: "none",
                  }}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="d-grid gap-2 col-md-6 mx-auto">
                <motion.button
                  type="submit"
                  className="btn btn-light btn-lg d-flex align-items-center justify-content-center"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send className="ms-2" size={18} />
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
