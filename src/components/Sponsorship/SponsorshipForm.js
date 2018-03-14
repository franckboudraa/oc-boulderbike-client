import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class SponsorshipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      slogan: ''
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  render() {
    const { firstName, lastName, email, slogan } = this.state;
    const maxChar =
      slogan.length > 0 ? ` (${slogan.length}/50 characters)` : '';
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            value={firstName}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            value={lastName}
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Input
          name="email"
          type="email"
          label="Email Address"
          placeholder="Your email address"
          value={email}
          onChange={this.handleChange}
          required
        />
        <Form.TextArea
          name="slogan"
          label={`Your slogan for the race${maxChar}`}
          placeholder="Max 50 characters"
          autoHeight
          maxLength={50}
          value={slogan}
          onChange={this.handleChange}
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default SponsorshipForm;
