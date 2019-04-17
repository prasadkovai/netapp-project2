import React, { Component } from "react";
import {FormGroup, FormControl } from "react-bootstrap";
import { Button,Grid,Form, Header, Image, Segment} from 'semantic-ui-react';

import "../../style/Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    let name=window.localStorage.getItem('username');
    console.log(name,'name');
        if(name!==null)
        {
            let path = `/home`;
            this.props.history.push(path);
        }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    // if(this.state.email==="prasadkovai@gmail.com"&&this.state.password==="prasad")
    // {
      if(this.state.email.length < 0)
      localStorage.setItem("username","PRASAD");
      else
      localStorage.setItem("username",this.state.email);
      let path = `/home`;
      this.props.history.push(path);
    // }
    // else{
    //   alert("Error in username and password");
    // }
    
  }

  render() {
    return (
      <div className='login-form'>
      {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}
    </style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/net-app-sales.png' /> Log-in to your account
        </Header>
        <Form onSubmit={this.handleSubmit}>
        <Segment stacked>
          <FormGroup controlId="email" bsSize="large">
           
            <FormControl
              autoFocus
               icon='user' 
            iconPosition='left' 
            placeholder='E-mail address' 
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
          
            <FormControl
            
            icon='lock'
            iconPosition='left'
            placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button color='teal' fluid size='large' onClick={this.pageChange} disabled={!this.validateForm()}>
              Login
            </Button>
            </Segment>
        </Form>
        {/* <Message>
          New to us? <a>Sign Up</a>
        </Message> */}
      </Grid.Column>
    </Grid>
      </div>
    );
  }
}
