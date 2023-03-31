import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Posts from './components/Posts';
import Add from './components/Add';
import Contact from "./components/Contact";
import Edit from './components/Edit';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer'

const App = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get('http://127.0.0.1:3000/')
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error))
  };

  const handleCreate = (data) => {
    axios.post('http://127.0.0.1:3000/posts', data)
      .then((response) => {
        let newPosts = [...posts, response.data]
        setPosts(newPosts);
      })
  };

  const handleDelete = (deletedPost) => {
    axios.delete('http://127.0.0.1:3000/posts/' + deletedPost._id)
      .then((response) => {
        let newPosts = posts.filter((post) => {
          return post._id !== deletedPost._id
        })
        setPosts(newPosts);
      })
  };

  const handleEdit = (data) => {
    axios.put('http://127.0.0.1:3000/posts/' + data._id, data)
      .then((response) => {
        let newPosts = posts.map((post) => {
          return post._id !== data._id ? post : data
        })
        setPosts(newPosts);
      })
  };

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  useEffect(() => {
    getPosts()
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Posts posts={posts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<Add handleCreate={handleCreate} />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/edit" element={<Edit handleEdit={handleEdit} />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App