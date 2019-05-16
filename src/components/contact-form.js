import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'Send Message'
  }

  render() {
    return (
      <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
        <h4 className="title title--underline">Contact Us</h4>
        <label>Your name
          <input 
            onChange={e => this.setState({ name: e.target.value })}
            name="name"
            type="text"
            placeholder="Your Name"
            value={this.state.name} />
        </label>
        <label>Your email
          <input 
            onChange={e => this.setState({ email: e.target.value })}
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            value={this.state.email} />
        </label>
        <label>Your Message
          <textarea 
            onChange={e => this.setState({ message: e.target.value})}
            name="message"
            type="text"
            placeholder="your message"
            value={this.state.message}
            required />
        </label>
        <div>
          <button 
            type="submit" 
            className="btn">{ this.state.buttonText }</button>
        </div>
      </form>
    )
  }
}

export default ContactForm;