import style from './SubLayout.module.css';

export default function SubLayout({ children }) {
  return (
    <div className='SubLayout'>
      {children}
      <footer className={style.footer}>@jks</footer>
    </div>
  );
}
