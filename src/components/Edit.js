import { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Edit = ({ posts, handleEdit }) => {
  const { id } = useParams();
  const post = posts.filter(post => post._id === id)[0];
  const [currentPost, setPost] = useState({ ...post });
  const navigate = useNavigate();

  const handleChange = e => {
    setPost({ ...currentPost, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    handleEdit(currentPost);
    navigate("/");
  }

  return (
    <div className="edit-form">
      <h2>Edit Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="title">Title: </label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={currentPost.title}
            onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="image">Image: </label>
          <input
            className="form-control"
            type="text"
            name="image"
            value={currentPost.image || ""}
            onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="author">Author: </label>
          <input
            className="form-control"
            type="text"
            name="author"
            value={currentPost.author}
            onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="date">Date: </label>
          <input
            className="form-control"
            type="text"
            name="date"
            value={currentPost.date}
            onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="tags">Tags: </label>
          <input
            className="form-control"
            type="text"
            name="tags"
            value={currentPost.tags}
            onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="article">Article: </label>
          <textarea
            className="form-control"
            name="article"
            id="article"
            onChange={handleChange}
            value={currentPost.article}
            rows="3"></textarea>
        </div>
        <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Edit