import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        organization: '',
        linkedin: '',
        status: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        setSubmitted(true);
        // You can add the form submission logic here
    };

    return (
        <div className="registration-page">
            <h1 className="registration-title">Event Registration</h1>
            {submitted ? (
                <div className="submission-message">Thank you for registering! We will get back to you soon.</div>
            ) : (
                <form className="registration-form" onSubmit={handleSubmit}>
                    <label>
                        Organizational mail id (All personal mail ids will be rejected by default) *
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                    <label>
                        Phone No. *
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                    <label>
                        Organization Name *
                        <input 
                            type="text" 
                            name="organization" 
                            value={formData.organization} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                    <label>
                        What is your LinkedIn profile? *
                        <input 
                            type="url" 
                            name="linkedin" 
                            value={formData.linkedin} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                    <label>
                        What is your current status? *
                        <select 
                            name="status" 
                            value={formData.status} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="" disabled>Select one or more</option>
                            <option value="Student">Student</option>
                            <option value="Working in a Startup">Working in a Startup</option>
                            <option value="Working in a Corporate">Working in a Corporate</option>
                            <option value="Founder">Founder</option>
                        </select>
                    </label>
                    <button type="submit" className="submit-button">Register</button>
                </form>
            )}
        </div>
    );
};

export default RegistrationPage;
