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

//Hooks to manage state
const App = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage ] = useState("");
  
//Axios is used to make HTTP requests to a backend server running on the local host at port 3000. The getPosts, handleCreate, handleDelete, handleEdit, and handleContacts functions define the behavior for handling HTTP requests for reading, creating, deleting, updating, and posting contact information to the server, respectively.

//Read
  const getPosts = () => {
    axios.get('http:/127.0.0.0.1:3000/')
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error))
  };
//Create
  const handleCreate = (data) => {
    axios.post('http:/127.0.0.0.1:3000/posts', data)
      .then((response) => {
        let newPosts = [...posts, response.data];
        setPosts(newPosts);
      })
  };
//Delete
  const handleDelete = (deletedPost) => {
    axios.delete('http:/127.0.0.0.1:3000/posts/' + deletedPost._id)
      .then((response) => {
        let newPosts = posts.filter((post) => {
          return post._id !== deletedPost._id
        })
        setPosts(newPosts);
      })
  };
//Edit
  const handleEdit = (data) => {
    axios.put('http:/127.0.0.0.1:3000/posts/' + data._id, data)
      .then((response) => {
        let newPosts = posts.map((post) => {
          return post._id !== data._id ? post : response.data
        })
        setPosts(newPosts);
      })
  };
//Contacts
  const handleContacts = (data) => {
    console.log(data)
    axios.post('http:/127.0.0.0.1:3000/contacts', data).then((response) => {
        alert("We have received your comments!")
      })
  } 
//Hook used to fetch posts
  useEffect(() => {
    getPosts()
  }, []);


// The BrowserRouter component from the react-router-dom module is used to define the routing for the web application. It wraps the Header, Routes, and Footer components, which are defined in separate files. The Routes component defines the mapping between the URL paths and the corresponding components to be rendered.

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        {message}
        <Routes>
          <Route
            path="/"
            element={<Posts handleDelete={handleDelete} posts={posts} />} />
          <Route
            path="/about"
            element={<About />} />
          <Route
            path="/add"
            element={<Add handleCreate={handleCreate} />} />
          <Route
            path="/contact"
            element={<Contact handleContacts={handleContacts} />} />
          <Route
            path="/edit/:id"
            element={<Edit posts={posts} handleEdit={handleEdit} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App