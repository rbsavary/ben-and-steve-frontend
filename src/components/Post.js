const Post = ({ post }) => {

  return (
    <>
      <div>
        <h2>For Your Reading Pleasure</h2>
        <h3>{post.title}</h3>
        <img alt="" src={post.image}></img>
        <article>{post.article}</article>
        <p>{post.author}</p>
        <p>{post.date}</p>
        <p>{post.tags}</p>
      </div>
    </>
  )
}

export default Post