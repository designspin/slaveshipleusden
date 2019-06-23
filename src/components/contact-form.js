import React, { Component } from 'react';
import { Formik } from 'formik';
import { string, object } from 'yup';

class ContactForm extends Component {
  state = {
    sent: false
  }

  render() {
    const { sent } = this.state;

    if(sent) {
      return (
        <h4 className="title title--underline">Your message has been sent</h4>
      )
    } else {
      return (
        <Formik
          initialValues={{ name: '', email: '', content: ''}}
          onSubmit={(values, { setSubmitting }) => {
            fetch('https://f8fo9v02b3.execute-api.eu-west-1.amazonaws.com/dev/email/send', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values)
            })
            .then(response => { 
              console.log(response)
              setSubmitting(false);
              this.setState(prevstate => ({ sent: !prevstate.sent }));
            })
            .catch(err => { 
              console.log(err)
              setSubmitting(false);
            });
          }}
          validationSchema ={object().shape({
            name: string()
              .required('Required'),
            email: string()
              .email()
              .required('Required'),
            content: string()
              .required('Required')
          })}
        >
          {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
            <form 
              className="contact-form"
              onSubmit={handleSubmit}>
                <h4 className="title title--underline">Contact Us</h4>
                <div className="contact-form__element">
                  <input 
                    onChange={handleChange}
                    value={values.name}
                    type="text"
                    name="name"
                    placeholder="Your Name">
                  </input>
                  
                  {errors.name && 
                    <span style={{ color: "red", fontWeight: "bold" }}>
                    {errors.name}
                    </span>
                  }
                </div>
                <div className="contact-form__element">
                  <input
                    onChange={handleChange}
                    value={values.email}
                    type="email"
                    name="email"
                    placeholder="Your Email">
                  </input>
                  {errors.email && 
                    <span style={{ color: "red", fontWeight: "bold" }}>
                    {errors.email}
                    </span>
                  }
                </div>
                <div className="contact-form__element">
                  <textarea
                    onChange={handleChange}
                    value={values.content}
                    name="content"
                    placeholder="Your Message" />
                  {errors.content &&
                    <span style={{ color: "red", fontWeight: "bold"}}>
                    {errors.content}
                    </span>
                  }
                </div>
                <button className="btn" type="submit" disabled={isSubmitting}>Submit</button>
            </form>
          )}
        </Formik>
        )
    }
  }
}

export default ContactForm;