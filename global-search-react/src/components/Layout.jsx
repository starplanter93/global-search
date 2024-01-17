import style from './Layout.module.css';
import { useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
  const nav = useNavigate();
  const onClickHeader = () => {
    nav('/');
  };
  return (
    <div>
      <header className={style.header} onClick={onClickHeader}>
        <div>🌍 Global-Search</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
