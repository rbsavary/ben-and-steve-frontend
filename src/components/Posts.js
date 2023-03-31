import Post from './Post'

const Posts = ({ posts, handleDelete }) => {

  return (
    <>
      {
        posts.map((post) => (
          <Post key={post.title} handleDelete={handleDelete} post={post} />
        ))
      }
    </>
  );
}

export default Posts;