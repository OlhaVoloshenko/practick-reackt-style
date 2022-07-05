import style from './PageTitle.module.css';

export const PageTitle = ({ text }) => {
  return <h1 className={style.title}>{text}</h1>;
};
