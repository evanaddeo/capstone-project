import React, { useState } from 'react';

const UpdateApp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    resume: null,
    coverLetter: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Education Experience:</label>
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Resume (PDF only):</label>
        <input
          type="file"
          name="resume"
          accept=".pdf"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Cover Letter (PDF only):</label>
        <input
          type="file"
          name="coverLetter"
          accept=".pdf"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateApp;
