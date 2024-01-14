import style from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <header className={style.header}>
        <div>🌍 Global-Search</div>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
