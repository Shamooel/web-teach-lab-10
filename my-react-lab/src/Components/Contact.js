import React from 'react';
function Contact() {
return (
    <div className="contact-page">
    <div className="info-section">
      <h2>Let us know what you think.</h2>
      <p>Should you have any questions, comments, or inquiries please reach out to us.</p>
      
      <div className="contact-block">
        <h3>FOR ONLINE STORE</h3>
        <p><strong>BY EMAIL</strong><br />ecommerceshop@.com</p>
        <p><strong>BY TELEPHONE</strong><br />021 111 112 111 (9am - 10pm, Monday - Saturday, Sunday 11am - 8pm)</p>
        <p><strong>BY MAIL</strong><br />Assignment Pvt Ltd<br />Head office, 40 Sector 19, Korangi Industrial Area</p>
      </div>
      
      <div className="contact-block">
        <h3>FOR OUTLETS INQUIRIES</h3>
        <p><strong>BY EMAIL</strong><br />feedback@Assignment.com</p>
        <p><strong>BY TELEPHONE</strong><br />021 111 112 111 (9am - 6pm, Monday - Saturday)</p>
        <p><strong>IN-STORE LOCATIONS & PHONE NUMBERS</strong><br /><a href="#">Click here</a></p>
      </div>
      
      <div className="contact-block">
        <h3>FOR CORPORATE ORDERS AND INQUIRIES</h3>
        <p><strong>BY EMAIL</strong><br />corporate@Assignment.com</p>
      </div>
    </div>

    <div className="form-section">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="message">What's on your mind?</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);
}
export default Contact;