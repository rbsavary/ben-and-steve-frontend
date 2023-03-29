import { useState } from 'react'

const Add = (props) => {
    const [blog, setBlog] = useState({name: '', age: 0})


    const handleChange = (event) => {
        setBlog({...blog, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(blog)
    }




    return (
        <>
            <h2>Add Article</h2>
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
        </>
    )
}

export default Add