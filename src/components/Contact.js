import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = ({handleContacts}) => {
  const [contact, setContact] = useState({});
const navigate = useNavigate()
  const handleChange = (event) => {
    setContact({...contact, [event.target.name]: event.target.value} )
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    handleContacts(contact)
    navigate("/")
  }
  return (
    <div className="form-group">
    <h2 className="text-center">Contact</h2>
    <img className="card-img" id="contact-img" src="https://i.imgur.com/gmYszaC.jpeg" alt=""/>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="full-name" className="form-label">Full Name</label>
        <input onChange={handleChange} type="text" name="name" className="form-control" id="full-name" placeholder="Jane Doe" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input  onChange={handleChange} type="email" name="email" className="form-control" id="email" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="comments" className="form-label">Comments</label>
        <textarea onChange={handleChange} className="form-control" name="comments" id="comments" rows="3"></textarea>
      </div>
      <input className="btn btn-primary" type="submit" value="Submit"/>
    </form>
    </div>
  );
};

export default Contact;