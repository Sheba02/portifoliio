import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setResponseMessage(data.message || 'Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setResponseMessage(data.error || 'Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setResponseMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <section className="section contact-page">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a project in mind or just want to chat? Feel free to reach out through any of these channels!
      </p>

      <div className="contact-cards-grid">
        <a href="mailto:shebamugisha9@gmail.com" className="contact-card">
          <div className="contact-card-icon">📧</div>
          <div className="contact-card-content">
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-detail">shebamugisha9@gmail.com</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/sheba-mugisha-aa798b2b0/" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-card-icon">💼</div>
          <div className="contact-card-content">
            <h3 className="contact-card-title">LinkedIn</h3>
            <p className="contact-card-detail">linkedin.com/in/sheba-mugisha</p>
          </div>
        </a>

        <a href="https://x.com/sheba_mugisha" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-card-icon">🐦</div>
          <div className="contact-card-content">
            <h3 className="contact-card-title">X</h3>
            <p className="contact-card-detail">@sheba_mugisha</p>
          </div>
        </a>

        <a href="tel:+250736083584" className="contact-card">
          <div className="contact-card-icon">📞</div>
          <div className="contact-card-content">
            <h3 className="contact-card-title">Phone</h3>
            <p className="contact-card-detail">+250 736 083 584</p>
          </div>
        </a>

        <a href="https://github.com/Sheba02" target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-card-icon">💻</div>
          <div className="contact-card-content">
            <h3 className="contact-card-title">GitHub</h3>
            <p className="contact-card-detail">github.com/Sheba02</p>
          </div>
        </a>

        <div className="contact-card">
          <div className="contact-card-icon">📍</div>
          <div className="contact-card-content">
            <h3 className="contact-card-title">Location</h3>
            <p className="contact-card-detail">Kigali, Rwanda</p>
          </div>
        </div>
      </div>

      <div className="email-form-section">
        <h3 className="form-section-title">Send me a message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows={6}
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {responseMessage && (
            <div className={`form-message ${status === 'success' ? 'success' : 'error'}`}>
              {responseMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;