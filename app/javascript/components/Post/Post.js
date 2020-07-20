import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import CommentForm from './CommentForm'
import Comment from './Comment'
import ReactDOM, { render } from "react-dom";

const Post = (props) =>{
  const [post, setPost] = useState({})
  const [comment, setComment] = useState({})
  const [comments, setComments] = useState([])
  const [loaded, setLoaded] = useState(false)
  
  const post_id = props.match.params.id
  const post_url = `/api/v1/posts/${post_id}`
  const comment_url = `/api/v1/comments.json?post_id=${post_id}`

  useEffect(()=>{

    axios.get(post_url)
    .then( response => {
      setPost(response.data)
      setLoaded(true)

      console.log(response)
    })

    axios.get(comment_url)
    .then( resp => {
      console.log(resp)
      setComments(resp.data.data)
    })

    .catch( response => console.log(response) )
  }, [comments.length])

  const handleChange = (e) => {
    e.preventDefault()

    setComment(Object.assign({}, comment, {[e.target.name]: e.target.value}))

    console.log('comment:', comment)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    // const post_id = post.data.id
    axios.post('/api/v1/comments', {comment, post_id})
    .then(response => {
      const comments = [...post.comments, response.data.data]
      setPost({...post, comments})
      setComment({body: ''})
      setComments([comments])
      
        })
        .catch(response => {})
        window.location.reload();
      }
      
      const comments_grid = comments.map( item =>{
    return(
      <Comment
        key={item.attributes.body}
        attributes={item.attributes}
        />
    )
  })
    return (
      <div className="container">
      { loaded && 
        <div className="row">
          <div className="col-md-12">
            <div className="card px-5 pt-3 pb-4 mt-3">
            <Header
              attributes={post.data.attributes}
              comments={post.included}
            />
              <div className="comments-section">
                <div className="container">
                {comments_grid}
                </div>
              </div>
            <CommentForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={post.data.attributes}
              comment={comment}
              />
            </div>
          </div>
        </div>
      }
    </div>
  )
}
export default Post