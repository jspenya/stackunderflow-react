import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import CommentForm from './CommentForm'

const Post = (props) =>{
  const [post, setPost] = useState({})
  const [comment, setComment] = useState({})
  const [loaded, setLoaded] = useState(false)

  this.state = {
    comments: []
  }

  useEffect(()=>{
    const id = props.match.params.id
    const url = `/api/v1/posts/${id}`

    axios.get(url)
    .then( response => {
      setPost(response.data)
      setLoaded(true)

      console.log(response)
    })
    .catch( response => console.log(response) )
  }, [])

  const handleChange = (e) => {
    e.preventDefault()

    setComment(Object.assign({}, comment, {[e.target.name]: e.target.value}))

    console.log('comment:', comment)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const post_id = post.data.id
    axios.post('/api/v1/comments', {comment, post_id})
    .then(response => {
      const included = [...post.included, response.data.data]
      setPost({...post, included})
      setComment({body: ''})

      console.log('Saved')
      this.setState(prevState=>({
        comments: [newComment, ...prevState.comments]
      }))
    })
    .catch(response => {})
  }

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