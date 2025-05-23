import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'> 
      <h1>Contact Me</h1>
      <form action="https://formspree.io/f/mgvkawon" method="POST" className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact