import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

export const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [area, setArea] = useState('');
    const [role, setRole] = useState('user'); // Role selection
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [usererror, setUsererror] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        let newErrors = {};
        if (phone.length !== 10 || !/^\d+$/.test(phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }
        if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!name) {
            newErrors.name = 'Name is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('https://backend-1-gogw.onrender.com/api/auth/signup', {
                    name,
                    email,
                    password,
                    phone,
                    area,
                    address,
                    role
                });

                setMessage(response.data.message || 'Signup successful!');
                setTimeout(() => navigate('/login'), 2000);

                setName('');
                setEmail('');
                setPassword('');
                setPhone('');
                setArea('');
                setAddress('');
                setRole('user');
                setErrors({});
            } catch (error) {
                if (error.response?.data?.error) {
                    setUsererror(error.response.data.error);
                } else {
                    setUsererror("Signup failed. Please try again later.");
                }
                console.error("Error in Signup", error);
            }
        }
    };

    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="signup-page">
            <div className="formContainer">
                <h1 className="formHeader">Sign Up</h1>
                <p className="formSubHeader">Create your account</p>

                {usererror && <p className='errorText'>{usererror}</p>}

                <form onSubmit={submit} className="signup-form">
                    <div className="inputGroup">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            className={`inputField ${errors.name ? 'inputFieldError' : ''}`}
                        />
                        {errors.name && <p className="errorText">{errors.name}</p>}
                    </div>

                    <div className="inputGroup">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className={`inputField ${errors.email ? 'inputFieldError' : ''}`}
                        />
                        {errors.email && <p className="errorText">{errors.email}</p>}
                    </div>

                    <div className="inputGroup">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className={`inputField ${errors.password ? 'inputFieldError' : ''}`}
                        />
                        {errors.password && <p className="errorText">{errors.password}</p>}
                    </div>

                    <div className="inputGroup">
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number"
                            className={`inputField ${errors.phone ? 'inputFieldError' : ''}`}
                        />
                        {errors.phone && <p className="errorText">{errors.phone}</p>}
                    </div>

                    <div className="inputGroup">
                        <input
                            type="text"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            placeholder="Area"
                            className="inputField"
                        />
                    </div>

                    <div className="inputGroup">
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                            className="inputField"
                        />
                    </div>

                    {/* ✅ Role Selection */}
                    <div className="inputGroup">
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="inputField roleDropdown"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <button type="submit" className="submitButton">Sign Up</button>

                    <p className="orText">OR</p>

                    <button type="button" onClick={goToLogin} className="switchButton">Login</button>

                    {message && <p className="msg">{message}</p>}
                </form>
            </div>
        </div>
    );
};
