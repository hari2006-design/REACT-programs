import React, { useState } from "react";
import "./RegistrationForm.css";

export default function RegistrationForm({ onSubmit }) {
    const [form, setForm] = useState({
        firstName: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const [registeredData, setRegisteredData] = useState(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    
    const validatePassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
        return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
    };

    const validate = () => {
        const e = {};
        if (!form.firstName.trim()) {
            e.firstName = "Full name is required";
        } else if (!nameRegex.test(form.firstName.trim())) {
            e.firstName = "Name must contain only letters and spaces";
        }
        if (!emailRegex.test(form.email)) {
            e.email = "Valid email is required (e.g., user@example.com)";
        }
        if (form.password.length < 8) {
            e.password = "Password must be at least 8 characters";
        } else if (!validatePassword(form.password)) {
            e.password = "Password must contain uppercase, lowercase, number, and special character";
        }
        return e;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const eObj = validate();
        if (Object.keys(eObj).length) {
            setErrors(eObj);
            setSuccess("");
            return;
        }
        
        if (typeof onSubmit === "function") onSubmit({ ...form });
        setSuccess("Registration successful");
        setRegisteredData({
            firstName: form.firstName,
            email: form.email,
        });
        setForm({
            firstName: "",
            email: "",
            password: "",
        });
        setErrors({});
    };

    const handleReset = () => {
        setRegisteredData(null);
        setSuccess("");
        setForm({
            firstName: "",
            email: "",
            password: "",
        });
        setErrors({});
    };

    const field = (label, name, type = "text") => (
        <div className="field-group">
            <label className="field-label">{label}</label>
            <input
                className={`input-field ${errors[name] ? 'error' : ''}`}
                name={name}
                type={type}
                value={form[name]}
                onChange={handleChange}
                placeholder={`Enter your ${label.toLowerCase()}`}
            />
            {errors[name] && <div className="error-message">{errors[name]}</div>}
        </div>
    );

    return (
        <div>
            {registeredData ? (
                <div className="success-overlay">
                    <div className="success-card">
                        <div className="success-checkmark">✓</div>
                        <h3 className="success-title">Registration Successful!</h3>
                        <p className="success-subtitle">Your account has been created successfully</p>
                        
                        <div className="registered-info">
                            <div className="info-row">
                                <span className="info-label">Name:</span>
                                <span className="info-value">{registeredData.firstName}</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Email:</span>
                                <span className="info-value">{registeredData.email}</span>
                            </div>
                        </div>
                        
                        <button type="button" onClick={handleReset} className="continue-button">
                            Continue
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="registration-form">
                    <h2 className="form-title">Create Account</h2>
                    <p className="form-subtitle">Join our community in seconds</p>
                    {field("Full Name", "firstName")}
                    {field("Email Address", "email", "email")}
                    {field("Password", "password", "password")}
                    <div className="password-hint">
                        <p className="hint-title">Password Requirements:</p>
                        <ul className="hint-list">
                            <li>At least 8 characters</li>
                            <li>One uppercase letter (A-Z)</li>
                            <li>One lowercase letter (a-z)</li>
                            <li>One number (0-9)</li>
                            <li>One special character (!@#$%^&*)</li>
                        </ul>
                    </div>
                    <button type="submit" className="submit-button">
                        Register
                    </button>
                </form>
            )}
        </div>
    );
}