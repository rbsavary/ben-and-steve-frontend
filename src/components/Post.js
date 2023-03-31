import { Link } from "react-router-dom";
const Post = ({ post }) => {

  return (
    <>
      <div class="card text-center" >
      <h2 class="card-title">{post.title}</h2>
        <img class="card-img-top" src={post.image} alt="Card image"/>
  <   div class="card-body">
        
        <p class="card-text">{post.article}</p>
        <p class="card-text">Author: {post.author}</p>
        <p class="card-text">{post.date}</p>
        <p class="card-text">Tags: {post.tags}</p>
        <Link to="/edit" class="btn btn-primary" >Edit</Link>
  </div>
</div>
    </>
  )
}

export default Post