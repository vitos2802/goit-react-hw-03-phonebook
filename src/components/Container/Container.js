import s from './Container.module.css';

const Container = ({ children }) => {
  return <div className={s.Container}>{children}</div>;
};

export default Container;
