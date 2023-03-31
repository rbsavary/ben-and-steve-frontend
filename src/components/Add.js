import { useState } from 'react'

const Add = (props) => {
    const [post, setPost] = useState({name: '', age: 0})


    const handleChange = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(post)
    }

    return (
        <>
            <h2 class="text-center">Add Article</h2>
            
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="full-name" className="form-control" id="title" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="text" name="image" className="form-control" id="image" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="article" className="form-label">Article</label>
                    <textarea className="form-control" name="article" id="article" rows="10" onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" name="author" className="form-control" id="author" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" name="date" className="form-control" id="date" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags </label>
                    <input type="text" name="tags" className="form-control" id="tags" onChange={handleChange}/>
                </div>
                <div>
                    <input class="btn btn-primary" type="submit" value="Submit"></input>
                </div>
            </div>
        </form>
        </>
    )
}
export default Add