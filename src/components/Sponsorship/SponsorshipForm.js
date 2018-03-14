import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitSponsorship } from '../../actions';

import { Form, Message } from 'semantic-ui-react';

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

  handleSubmit = () => {
    const { firstName, lastName, email, slogan } = this.state;

    this.props.submitSponsorship({ firstName, lastName, email, slogan });
  };

  render() {
    const { firstName, lastName, email, slogan } = this.state;
    const { success, error, loading } = this.props.sponsorship;
    const maxChar =
      slogan.length > 0 ? ` (${slogan.length}/50 characters)` : '';

    return (
      <Form
        onSubmit={this.handleSubmit}
        success={success}
        error={error}
        loading={loading}
      >
        <Form.Group widths="equal">
          <Form.Input
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            value={firstName}
            onChange={this.handleChange}
            minLength={2}
            maxLength={30}
            required
            disabled={success}
          />
          <Form.Input
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            value={lastName}
            onChange={this.handleChange}
            minLength={2}
            maxLength={30}
            required
            disabled={success}
          />
        </Form.Group>
        <Form.Input
          name="email"
          type="email"
          label="Email Address"
          placeholder="Your email address"
          value={email}
          onChange={this.handleChange}
          minLength={5}
          maxLength={40}
          required
          disabled={success}
        />
        <Form.TextArea
          name="slogan"
          label={`Your slogan for the race${maxChar}`}
          placeholder="Max 50 characters"
          autoHeight
          minLength={10}
          maxLength={50}
          value={slogan}
          onChange={this.handleChange}
          required
          disabled={success}
        />
        <Message
          success
          header="Your slogan has been sent!"
          content="We'll get back to you as soon as possible!"
        />
        <Message
          error
          header="An error occured while sending your slogan!"
          content="Please try again."
        />
        <Form.Button disabled={success}>Submit</Form.Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    sponsorship: state.sponsorship
  };
}

export default connect(mapStateToProps, { submitSponsorship })(SponsorshipForm);
