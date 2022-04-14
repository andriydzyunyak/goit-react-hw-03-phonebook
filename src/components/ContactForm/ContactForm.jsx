//import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {
  InputForm,
  LabelName,
  SubmitButton,
  PhonebookForm,
} from 'components/ContactForm/ContactForm.styled';

const initialState = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export const ContactForm = addContact => {
  const handleSubmit = (values, actions) => {
    addContact.onSubmit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialState}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <PhonebookForm autoComplete="off">
        <LabelName htmlFor={'name'}>Name</LabelName>
        <InputForm
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage name="name" component="div" />
        <LabelName htmlFor={'number'}>Number</LabelName>
        <InputForm
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="number" component="div" />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </PhonebookForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
};
