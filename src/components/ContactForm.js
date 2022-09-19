import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class ContactForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value})
  }
  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value})
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value})
  }
  handleMessageChange(e) {
    this.setState({ message: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    })
  }

  render () {
    return (
      <>
        <h1 className='my-3'>Contact Us</h1>
        <Form>
          <Form.Group className='mb-3' controlId='MessageNameInput'>
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type='input' 
              placeholder='First Name'
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
               />
          </Form.Group>

          <Form.Group className='mb-3' controlId='lastNameInput'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type='input'
              placeholder='Last Name'
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleLastNameChange} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='emailInput'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type='email' 
              placeholder='name@example.com'
              name='email'
              value={this.state.email}
              onChange={this.handleEmailChange} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='messageInput'>
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as='textarea' 
              rows={3}
              name='message'
              value={this.state.message}
              onChange={this.handleMessageChange} />
          </Form.Group>
          <Button type='button' size='lg' onClick={this.handleSubmit}>Send</Button>
        </Form>
      </>
    )
  }
}

export default ContactForm;