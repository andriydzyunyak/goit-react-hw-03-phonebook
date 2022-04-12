import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            id={this.nameInputId}
            onChange={this.handleChange}
            required
          />
        </label>
        <label htmlFor={this.nameInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            id={this.nameInputId}
            onChange={this.handleChange}
          ></input>
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
