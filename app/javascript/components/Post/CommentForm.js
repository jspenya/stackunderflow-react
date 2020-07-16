import React from 'react'
import styled from 'styled-components'

const Field = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
  
`
const Button = styled.button `
  padding-top: 5px;
  padding-bottom: 5px;
  transition-duration: 0.5s;
  color: white;
  background-color:	black; 
  border: 0px;

  &:hover {
    background-color: #FF8C00;
    color: white;
  }
`

const CommentForm = (props) => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-12-pb">
          <form onSubmit={props.handleSubmit}>
            <Field>
              <div className="field">
                <input onChange={props.handleChange} value={props.comment.body} type="textarea" name="body" placeholder="Write Your Comment"/>
              </div>
            </Field>
            <Button type="submit" className="btn btn-primary">Post Comment</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CommentForm