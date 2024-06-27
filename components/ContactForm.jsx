// components/ContactForm.js
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectDescription: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {
        setStatus('Message sent successfully');
        setFormData({
          name: '',
          email: '',
          subject: '',
          projectDescription: '',
        });
      } else {
        setStatus(data.message);
      }
    } catch (error) {
      setStatus('Error sending message');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="fields">
      <div className="field">
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </div>
      </div>
      <div className="field">
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>


      <div className="field">
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

       <div className="field txtarea">
        <textarea
          id="projectDescription"
          name="projectDescription"
          cols="30" rows="10" placeholder="Describe Project..."
          value={formData.projectDescription}
          onChange={handleChange}
          required
        />
      </div>
      <div className="">
      <button className="btn" type="submit">Send</button>
      {status && <p>{status}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
