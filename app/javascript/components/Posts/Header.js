import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Section = styled.section `
  background-color: #F5F5F5;
`

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

const Header = (props) => {
  return(
    <Section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col-md-12 pt-3 pb-3 mb-1">
            <div className="cta-wrapper">
              <Button className="btn cta-btn">StackUnderFlow.</Button>
              <div className="float-right">
                <button className= "btn btn-primary mr-1">
                  <Link to="/login">Sign In</Link>
                </button>
                <button className= "btn btn-primary">
                  <Link to="/signup">Sign Up</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  ) 
}

export default Header