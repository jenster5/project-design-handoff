import React, { useState } from 'react';
import './Signup.css';

const SignupPageForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')

  const handleButtonClick = (e) => {
    e.preventDefault();
    alert('Thank you for trying Self Health!');
  }

  return (
    <div className="signup-outer-wrapper">
      <div className="signup-card">
        <h1><span className="highlighted-text">Book </span>&nbsp;a free trial</h1>
        <h3>Tell us about your preferences and we offer you a tailored plan for healthier life </h3>
        <div className="signup-inner-wrapper">
          <form className="form">
            <input type={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" id="name" className="name" />
            <input type={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" id="email" className="email" />
            <input type={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" id="phone" className="phone" />
            <input type={location} onChange={(e) => setLocation(e.target.value)} placeholder="Your current location (city,town)" id="location" className="location" />

            <div className="checkbox-container">
              <label htmlFor="accept">
                <input className="custom-checkbox" type="checkbox" name="accept" id="accept" />
                <span className="checkbox-label">I am over 13 and accept the <span className="highlighted-text2">privacy policy, terms of service,</span> and <span className="highlighted-text2">code of conduct</span></span>
              </label>
            </div>

          </form>
          <button className="free-trial-button" type="submit" onClick={handleButtonClick}>Get started free trial</button>
        </div>
      </div>
    </div>
  )
};

export default SignupPageForm;