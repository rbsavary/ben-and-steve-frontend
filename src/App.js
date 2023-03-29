import { useState, useEffect  } from 'react'
import axios from 'axios'
import Blog from './components/Blog'
import Add from './components/Add'
import Edit from './components/Edit'
import Header from './components/Header'
import About from './components/About'

const App = () => {
  // State Variables
  const [blogs, setBlog] = useState([{title: "", image: "", article: "", author: "", date: "", tags: ""}])

  const getBlog = () => {
    axios.get('http://127.0.0.1:3000/')
    .then((response) => setBlog(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    console.log(data)
    axios.post('http://127.0.0.1:3000/blog', data)
    .then((response) => {
      console.log(response)
      let newBlog = [...blogs, response.data]
      setBlog(newBlog)
    })
  }

  const handleDelete = (deletedBlog) => {
    axios.delete('http://127.0.0.1:3000/blog/' + deletedBlog._id)
    .then((response) => {
      let newBlog = blogs.filter((blog) => {
        return blog._id !== deletedBlog._id
      })
      setBlog(newBlog)
    })
  }

  const handleEdit = (data) => {
    axios.put('http://127.0.0.1:3000/blog/' + data._id, data)
    .then((response) => {
      let newBlog = blogs.map((blog) => {
        return blog._id !== data._id ? blog : data
      })
      setBlog(newBlog)
    })
  }

  useEffect(() => {
    getBlog()
  }, [])

  return (
  <>
    <Header/>
    <About/>
    <Add handleCreate={handleCreate}/>
    {
      blogs.map((blog) => (
        <Blog blog={blog}/>
      )
      )
    }
  </>
  )
}

export default App