import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", comment: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error connecting to the server.");
    }
  };

  return (
    <div className="contactpagefix" data-aos="fade-up">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>

        {submitted && (
          <p className="contact-success">
            Thank you! Your message has been sent.
          </p>
        )}

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </label>

          <label className="contact-label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </label>

          <label className="contact-label">
            Comment:
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              className="contact-textarea"
            />
          </label>

          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
