const Contact = () => {
  return (
    <div className="contact-form">
      <div className="mb-3">
        <label htmlFor="full-name" className="form-label">Full Name</label>
        <input type="text" name="full-name" className="form-control" id="full-name" placeholder="Jane Doe" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="comments" className="form-label">Comments</label>
        <textarea className="form-control" name="comments" id="comments" rows="3"></textarea>
      </div>
    </div>
  );
};

export default Contact;