import { useState } from "react";
import React from 'react'
import './FormsControlledComponents.css'
const FormsControlledComponents = () => {
    const [formData, setFormData] = useState({
        username: '',
        age: '',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const validateForm = () => {
        const newErrors = {};
        if (!formData.username) {
          newErrors.username = 'Enter User Name';
        }
        if (!formData.age) {
          newErrors.age = 'Age is required';
        }
        return newErrors;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
          setErrors(formErrors);
        } else {
          setErrors({});
          // Handle form submission (e.g., send data to the server)
          console.log('Form submitted:', formData);
          alert('Form submitted successfully');
        }
      };
    
      return (
        <div className="form-container">
        <h1>Controlled Form Example</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>
          <div>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </label>
            {errors.age && <p className="error-message">{errors.age}</p>}
          </div>
          <button type="submit" className="sub-button">Submit</button>
        </form>
      </div>
      );
    };

export default FormsControlledComponents