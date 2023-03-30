import {useState} from 'react'
const Edit = (props) => {
  const [blog, setBlog] = useState({...props.blog})

  const handleChange = (event) => {
    setBlog({...blog, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleEdit(blog)
   }

  return(
    <>
      <details>
        <summary>Edit Article</summary>
        <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="image">Image: </label>
                <input type="text" name="image" onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="article">Article: </label>
                <input type="text" name="article" onChange={handleChange}/>
                <br/>
                <br/><label htmlFor="author">Author: </label>
                <input type="text" name="author" onChange={handleChange}/>
                <br/>
                <br/><label htmlFor="date">Date: </label>
                <input type="date" name="date" onChange={handleChange}/>
                <br/>
                <br/><label htmlFor="tags">Tags: </label>
                <input type="text" name="tags" onChange={handleChange}/>
                <input type="submit"/>
            </form>
      </details>
    </>
  )
}

export default Edit