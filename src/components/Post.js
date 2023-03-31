import { NavLink } from "react-router-dom";

const Post = ({ post, handleDelete }) => {

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <img alt="" src={post.image}></img>
      <p>By: {post.author} - {post.tags}</p>
      <p>{post.date}</p>
      <p>{post.article}</p>
      <NavLink className="btn btn-primary" to={`/edit/${post._id}`}>Edit</NavLink>&nbsp;
      <button className="btn btn-danger" onClick={() => handleDelete(post)}>Delete</button>
    </div>
  )
}

export default Post