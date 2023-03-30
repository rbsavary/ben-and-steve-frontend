import Post from './Post'

const Posts = ({ posts }) => {

  return (
    <>
      {
        posts.map((post) => (
          <Post key={post.title} post={post} />
        ))
      }
    </>
  );
}

export default Posts;