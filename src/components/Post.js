const Post = ({ post }) => {

  return (
    <>
      <div class="card text-center" >
  <img class="card-img-top" src={post.image} alt="Card image"/>
  <div class="card-body">
    <h2 class="card-title">{post.title}</h2>
    <p class="card-text">{post.article}</p>
    <p class="card-text">Author: {post.author}</p>
        <p class="card-text">{post.date}</p>
        <p class="card-text">Tags: {post.tags}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}

export default Post