import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: false,
      error: false,
      disabled: false
    };
  }
  render() {
    return (
      <Form
        loading={this.state.loading}
        success={this.state.success}
        error={this.state.error}
        onSubmit={() => this.setState({ success: true, disabled: true })}
      >
        <h3>Contact us</h3>
        <Form.Input
          fluid
          disabled={this.state.disabled}
          icon="mail"
          iconPosition="left"
          placeholder="Your email address"
          type="email"
          required
        />
        <Form.TextArea
          disabled={this.state.disabled}
          autoHeight
          placeholder="Your message"
          required
        />
        <Message
          success
          header="Your message has been sent!"
          content="We'll get back to you as soon as possible!"
        />
        <Form.Button disabled={this.state.disabled}>Submit</Form.Button>
      </Form>
    );
  }
}

export default Contact;
