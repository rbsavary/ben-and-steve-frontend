const Post = (props) => {
 
    return (
        <>
          <div>
            <h2>For Your Reading Pleasure</h2>
            <h3>{props.blog.title}</h3>
            <img alt="" src={props.blog.image}></img>
            <article>{props.blog.article}</article>
            <p>{props.blog.author}</p>
            <p>{props.blog.date}</p>
            <p>{props.blog.tags}</p>
          </div>
        </>
    )
}

export default Post