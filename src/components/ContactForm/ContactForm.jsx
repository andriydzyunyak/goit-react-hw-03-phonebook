import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {
  InputForm,
  LabelName,
  SubmitButton,
  PhonebookForm,
} from 'components/ContactForm/ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
  });

  nameInputId = nanoid();

  handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    this.props.onSubmit(values);
    actions.resetForm();
  };

  render() {
    const { name, number } = this.state;
    return (
      <Formik
        initialValues={{ name, number }}
        validationSchema={this.schema}
        onSubmit={this.handleSubmit}
      >
        <PhonebookForm autoComplete="off">
          <LabelName htmlFor={this.nameInputId}>Name</LabelName>
          <InputForm
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.nameInputId}
            required
          />
          <ErrorMessage name="name" component="div" />
          <LabelName htmlFor={this.nameInputId}>Number</LabelName>
          <InputForm
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.nameInputId}
          />
          <ErrorMessage name="number" component="div" />
          <SubmitButton type="submit">Add contact</SubmitButton>
        </PhonebookForm>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
