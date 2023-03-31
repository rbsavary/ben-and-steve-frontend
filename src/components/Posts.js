import Post from './Post'

const Posts = ({ posts }) => {

  return (
    <>
    <h2 class="text-center">For Your Reading Pleasure</h2>
      {
        posts.map((post) => (
          <Post key={post.title} post={post} />
        ))
      }
    </>
  );
}

export default Posts;