import { Link, Outlet } from "react-router-dom";

import styles from "./RootLayout.module.css";

// Her er et komponent hvor vi definerer all de statiske
// elementene vi ønsker å ha på siden vår.
// Notere dere <Outlet /> komponenten
// Det er denne som vil bli erstatte med innholdet fra de
// andre rutene som ligger under, tilsvarendes
// hvordan 'props.children' brukes
export function RootLayout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h2>Header</h2>
        <nav className={styles.mainNav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>
          <span>©</span>
          Footer
        </p>
      </footer>
    </div>
  );
}
