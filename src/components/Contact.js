const Contact = () => {
  return (
    <>
    <h2 class="text-center">Contact</h2>
    <img class="card-img" id="contact-img" src="https://i.imgur.com/gmYszaC.jpeg" alt=""/>
    <div className="form-group">
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
      <input class="btn btn-primary" type="submit" value="Submit"></input>
    </div>
    </>
  );
};

export default Contact;