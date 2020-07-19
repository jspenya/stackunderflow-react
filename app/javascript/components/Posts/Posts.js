import React, {  useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Post from './Post'
import Header from './Header'
import PostForm from './PostForm'
import styled from 'styled-components'

const Posts = () =>{
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})

  useEffect(()=> {
    // get all our posts from our api
    // update posts in our state

    axios.get('api/v1/posts.json')
    .then( resp => {
      console.log(resp)
      setPosts(resp.data.data)
    })
    .catch( resp => console.log(resp) )
  }, [posts.length])

  const handleChange = (e) => {
    e.preventDefault()

    setPost(Object.assign({}, post, {[e.target.name]: e.target.value}))

    console.log('title:', post)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    // const post_id = post.data.id
    axios.post('/api/v1/posts', {post})
    .then(response => {
      const posts = [...posts, response.data.data]
      setPost({...post})

      window.location.reload();
    })
    .catch(response => {})
  }

  const grid = posts.map( item => {
    return(
      <Post
        key={item.attributes.id}
        attributes={item.attributes}
      />
    )
  })

  return (
    <div>
      <Header/>
      <div className="col-md-12">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {grid}
            </div>
            <div className="col-md-6">
              <PostForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                // attributes={post.data.attributes}
                post={post}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts