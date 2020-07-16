import React,  {  useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Comment from './Comment'
const Comments = () =>{
  const [comments, setComments] = useState([])

  useEffect(() => {
    // get all comments from our api
    // update the comments in our state above ^

    axios.get('/api/v1/comments.json')
    .then( resp => {
      console.log(resp)
      setComments(resp.data.data)
    })
    .catch( resp => console.log(resp) )
  }, [comments.length])

  const comments_grid = comments.map( item =>{
    return(
      <Comment
        key={item.attributes.id}
        attributes={item.attributes}
      />
    )
  })

  return(
    <div className="row">
      <div className="col-md-12">
        <div className="grid">
          {comments_grid}
        </div>
      </div>
    </div>
  )
}

export default Comments