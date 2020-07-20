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
  text-align: right;

  &:hover {
    background-color: #FF8C00;
    color: white;
  }
`

const Input = styled.textarea`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 3px;
`
const Form = styled.form`
  text-align: right;
`

const PostForm = (props) => {
  return(
    <div className="border-left">
      <div className="container ml-3">
        <div className="row">
          <div className="col-md-12">
            <Form onSubmit={props.handleSubmit}>
              <Field>
                <div className="post-create">
                  <div className="post_title">Got a Question?</div>
                  <div className="post-title pb-1 pt-3">
                    <Input autoFocus onChange={props.handleChange} value={props.post.title} rows="1" name="title" placeholder="title here goes here"/>
                  </div>
                  <div className="post-body pt-1">
                    <Input onChange={props.handleChange} value={props.post.body} rows="4" name="body" placeholder="body goes here"/>
                  </div>
                </div>
              </Field>
              <Button type="submit" className="btn btn-primary">Post Question</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostForm