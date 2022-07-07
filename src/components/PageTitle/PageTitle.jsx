import PropTypes from 'prop-types';
import style from './PageTitle.module.css';

export const PageTitle = ({ text }) => {
  return <h1 className={style.title}>{text}</h1>;
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
