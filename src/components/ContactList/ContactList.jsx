import { ContactItem } from 'components/ContactItem/ContactItem';
export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
