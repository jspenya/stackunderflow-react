import React, {  useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Post from './Post'
import Header from './Header'
import styled from 'styled-components'

const Posts = () =>{
  const [posts, setPosts] = useState([])

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

  const grid = posts.map( item => {
    return(
      <Post
        key={item.attributes.id}
        attributes={item.attributes}
      />
    )
  })

  return (
    <div className="col-md-12">
    <Header/>
    <div className="container">
        <div className="header">
        </div>
        <div className="grid">
          {grid}
        </div>
      </div>
    </div>
  )
}

export default Posts