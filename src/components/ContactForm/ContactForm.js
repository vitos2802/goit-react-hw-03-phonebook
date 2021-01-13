import PropTypes from 'prop-types';
import React, { Component } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    phone: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onCheck } = this.props;
    const newContact = {
      id: shortid.generate(),
      name: this.state.name,
      phone: this.state.phone,
    };

    if (!onCheck(newContact)) return;

    this.props.onSubmit(newContact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <div className={s.formInner}>
          <label className={s.label}>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>

          <label className={s.label}>
            <span>Phone</span>
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </label>
        </div>

        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
