import styled from '@emotion/styled';

export const Contact = styled.li`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.18;
  text-transform: capitalize;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactNumber = styled.span`
  margin-left: 5px;
`;

export const ContactDeleteButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: 0.03em;
  color: #212121;
  background-color: #f5f4fa;
  border: 1px solid #d3d2d7;
  border-radius: 6px;
  cursor: pointer;
  padding: 3px 8px;
  margin-left: 15px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover,
  &:focus {
    border: transparent;
    color: #ffffff;
    background-color: #2196f3;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
