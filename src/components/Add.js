import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Add = ({ handleCreate }) => {
    const [post, setPost] = useState({});
    const navigate = useNavigate();


    const handleChange = e => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleCreate(post);
        navigate("/");
    }

    return (
        <div className="add-form">
            <h2>Add Article</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="title">Title: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        id="title"
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="image">Image: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        id="image"
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="author">Author: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="author"
                        id="author"
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="date">Date: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="date"
                        id="date"
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="tags">Tags: </label>
                    <input
                        className="form-control"
                        type="text"
                        name="tags"
                        id="tags"
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="article">Article: </label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="article"
                        id="article"
                        rows="3"
                        onChange={handleChange} />
                </div>
                <input
                    className="btn btn-secondary btn-lg"
                    type="submit"
                    value="Submit" />
            </form>
        </div>
    )
}
export default Add