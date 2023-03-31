import { Link } from "react-router-dom";

const Post = ({ post }) => {

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <img alt="" src={post.image}></img>
      <p>By: {post.author} - {post.tags}</p>
      <p>{post.date}</p>
      <p>{post.article}</p>
      <Link to={`/edit/${post._id}`}>Edit</Link>
    </div>
  )
}

export default Post