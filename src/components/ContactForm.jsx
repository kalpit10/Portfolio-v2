// ContactForm.jsx
// Goal: keep EmailJS, but add simple, effective client-side protections
// Protections included:
// 1) Trim + remove zero-width characters
// 2) Strong validation (name/email/message), with min lengths
// 3) Hidden honeypot field (bots fill it → we block)
// 4) Cooldown between sends (simple rate-limit)
// 5) Disabled button + clear error messages
// 6) Sanitize values back into inputs BEFORE sending (so EmailJS gets clean text)
// 7) Uses HTML attributes like required/minLength + form noValidate

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import AlertBox from "./Alert"; // your existing success alert component

// How long to wait between messages (seconds)
const COOLDOWN_SECONDS = 10;

function ContactForm() {
  // Reference to the <form> element (EmailJS needs the actual DOM node)
  const formRef = useRef();

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // On mount, restore cooldown if user refreshed the page
  useEffect(() => {
    const lastTime = localStorage.getItem("lastSentTime"); // we save this after a successful send
    if (lastTime) {
      const secondsPassed = Math.floor(
        (Date.now() - parseInt(lastTime, 10)) / 1000
      );
      const left = COOLDOWN_SECONDS - secondsPassed;
      if (left > 0) setCooldown(left);
    }
  }, []);

  // Tick down the cooldown every second until it reaches 0
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  // --- Helper functions ---

  // Remove invisible zero-width chars + trim spaces so "empty-looking" spam is caught
  function cleanText(text) {
    if (!text) return "";
    return text.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
  }

  // Simple but solid email validator (still easy to read)
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");
  }

  // Validate all form fields + check honeypot
  function validateForm(data) {
    const name = cleanText(data.get("user_name"));
    const email = cleanText(data.get("user_email"));
    const message = cleanText(data.get("message"));
    const honeypot = cleanText(data.get("company")); // hidden field; humans won't fill this

    if (honeypot) return "Spam detected."; // if filled, very likely a bot
    if (!name || name.length < 2)
      return "Please enter your name (2+ characters).";
    if (!isValidEmail(email)) return "Please enter a valid email address.";
    if (!message || message.length < 10)
      return "Please write a message (10+ characters).";
    return ""; // no errors
  }

  // Main submit handler
  function handleSubmit(e) {
    e.preventDefault(); // stop normal form submit
    setError(""); // clear old errors

    // Guard: EmailJS must be configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError("Email service is not configured. Please try again later.");
      return;
    }

    // Guard: respect cooldown (prevents rapid bot spamming from same browser)
    if (cooldown > 0) return;

    // Build FormData from the form DOM node
    const formData = new FormData(formRef.current);

    // Validate inputs (includes trimming + zero-width removal)
    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    // IMPORTANT: sanitize values back into the inputs BEFORE sending
    // This ensures EmailJS receives the cleaned strings
    const nameEl = formRef.current.elements["user_name"];
    const emailEl = formRef.current.elements["user_email"];
    const msgEl = formRef.current.elements["message"];
    nameEl.value = cleanText(nameEl.value);
    emailEl.value = cleanText(emailEl.value);
    msgEl.value = cleanText(msgEl.value);

    // Call EmailJS
    setIsSending(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setShowAlert(true); // show success alert
        formRef.current.reset(); // clear the form

        // Start cooldown and remember the time
        localStorage.setItem("lastSentTime", Date.now().toString());
        setCooldown(COOLDOWN_SECONDS);

        // Auto-hide the success alert after 2 seconds (optional)
        setTimeout(() => setShowAlert(false), 2000);
      })
      .catch(() => {
        setError("Could not send message. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <div className="container mt-5 mb-5">
      <div
        className="card shadow"
        style={{
          backgroundColor: "#1f2029",
          maxWidth: "550px",
          margin: "auto",
        }}
      >
        {/* Pretty top border line (optional UI) */}
        <div
          style={{
            height: "3px",
            background: "linear-gradient(to right, #00c8ff, #8a2be2)",
          }}
        />

        {/* Header */}
        <div
          className="card-header text-center text-white"
          style={{ background: "transparent" }}
        >
          {showAlert && <AlertBox />} {/* Your existing success component */}
          <h2>Get in Touch</h2>
          <p className="text-muted">I'll get back to you as soon as possible</p>
          {/* Show validation or send errors here */}
          {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>

        {/* Body */}
        <div className="card-body">
          {/* noValidate lets us control validation messages with our own JS (cleaner UX) */}
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            {/* HONEYPOT: Hidden input bots often fill. Humans never see it. */}
            <input
              type="text"
              name="company"
              autoComplete="off"
              aria-hidden="true"
              // Use off-screen positioning instead of display:none so naive bots still see it
              style={{
                position: "absolute",
                left: "-9999px",
                height: 0,
                width: 0,
              }}
              onChange={() => {}}
            />

            {/* NAME */}
            <div className="mb-3">
              <label className="form-label text-white" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="user_name"
                className="form-control"
                // Browser-level checks (extra guard)
                required
                minLength={2}
                // Simple dark input styling (optional)
                style={{
                  backgroundColor: "#2a2b38",
                  borderColor: "#6f42c1",
                  color: "white",
                }}
              />
            </div>

            {/* EMAIL */}
            <div className="mb-3">
              <label className="form-label text-white" htmlFor="email">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                className="form-control"
                required
                autoComplete="email"
                inputMode="email"
                style={{
                  backgroundColor: "#2a2b38",
                  borderColor: "#6f42c1",
                  color: "white",
                }}
              />
            </div>

            {/* MESSAGE */}
            <div className="mb-4">
              <label className="form-label text-white" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="5"
                required
                minLength={10}
                style={{
                  backgroundColor: "#2a2b38",
                  borderColor: "#6f42c1",
                  color: "white",
                  resize: "none",
                }}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-light"
                // Disable while sending or during cooldown
                disabled={isSending || cooldown > 0}
              >
                {/* Button label changes based on state */}
                {isSending
                  ? "Sending..."
                  : cooldown > 0
                  ? `Wait ${cooldown}s`
                  : "Send Message"}{" "}
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
