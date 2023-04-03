import Post from './Post'

const Posts = ({ posts, handleDelete }) => {

  return (
    <>
    <h2 className="text-center">For Your Reading Pleasure</h2>
      {
        posts.map((post) => (
          <Post key={post.title} handleDelete={handleDelete} post={post} />
        ))
      }
    </>
  );
}

export default Posts;