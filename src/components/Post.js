import { NavLink } from "react-router-dom";

const Post = ({ post, handleDelete }) => {

  return (
    <div>
      <h3 className="text-center">{post.title}</h3>
      <img className="card-img-top" src={post.image} alt=""/>
      <div className="card-body"></div>
      <p>By: {post.author} - {post.tags}</p>
      <p>{post.date}</p>
      <p>{post.article}</p>
      <NavLink className="btn btn-primary" to={`/edit/${post._id}`}>Edit</NavLink>&nbsp;
      <button className="btn btn-danger" onClick={() => handleDelete(post)}>Delete</button>
    </div>
  )
}

export default Post