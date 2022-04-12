import PropTypes from 'prop-types';
import { SectionContainer } from 'components/Section.styled';

export const Section = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>;
};

Section.propTypes = {
  children: PropTypes.node,
};
