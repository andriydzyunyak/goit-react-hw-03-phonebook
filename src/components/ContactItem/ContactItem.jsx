export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      {name}:<span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
