import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import Reply from './Reply'
import ReplyForm from './ReplyForm'

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background: #fff;
  color: #333 !important;
  padding: 5px 10px;
  font-size: 18px;
  box-shadow: 0px 0px 0px 3px #473228,
    -6px 6px #ef5f17,
    -6px 6px 0px 3px #473228;
`
const Border = styled.div`
  border-bottom: 1px solid #d4d0d0;
`

const Flex = styled.div`
  width: 500px;
  // height: 50px;
  display: flex;
  flex: 1;
`

const CommentBody = styled.div`
  font-size: 15px;
`


const Comment = (props) => {
  const [comment, setComment] = useState({})
  const [reply, setReply] = useState({})
  const [replies, setReplies] = useState([])
  // const {id} = props.attributes
  const comment_id = props.attributes.id

  useEffect(() => {
    // get all replies from our api
    // update the reples in our state above ^
    // const id = props.match.params.id
    const url = `/api/v1/replies.json?comment_id=${comment_id}`

    axios.get(url)
    .then( resp => {
      console.log(resp)
      setReplies(resp.data.data)
    })
    .catch( resp => console.log(resp) )
  }, [replies.length])

  const handleChange = (e) => {
    e.preventDefault()

    setReply(Object.assign({}, reply, {[e.target.name]: e.target.value}))

    console.log('reply:', reply)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post('/api/v1/replies', {reply, comment_id})
    .then(response => {
      const replies = [...comment.replies, response.data.data]
      setComment({...comment, replies})
      setReply({body: ''})
      setReplies([replies])

    })
    .catch(response => {})
    window.location.reload();
  }

  const replies_grid = replies.map( item =>{
    return(
      <Reply
        key={item.attributes.body}
        attributes={item.attributes}
      />
    )
  })

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric"
  });
  
  return(
      <div className="row pt-2 pb-2">
          <div className="col-md-12">
            <Border>
            <Flex>
              <CommentBody>{props.attributes.body}</CommentBody>
            </Flex>
              <commented_by>Posted on {formatter.format(Date.parse(props.attributes.created_at))}</commented_by>
              <div className="container pb-3">
                <div className="row">
                  <reply_link>Replies: </reply_link>
                  <div className="col-md-12">
                    <reply_link>{replies_grid}</reply_link>
                    <ReplyForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    reply={reply}
                    />
                  </div>
                </div>
              </div>
            </Border>
        </div>
      </div>
  )
}

export default Comment