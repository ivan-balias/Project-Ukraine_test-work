import React from 'react';
import styles from "./styles.module.scss"
import {Link, useLocation} from "react-router-dom";

export const publicRoutes = [
  {
    name: "Home",
    path: "/"
  },
]

const Header = () => {
  const location = useLocation();

  return (
      <header className={`${styles.header}`}>
        <div className="container">
          <nav className={styles.menu}>
            <ul className={styles.list}>
              {publicRoutes.map((route, i) => (
                  <li key={i}>
                    <Link to={route.path}
                          className={`${styles.link} ${location.pathname === route.path ? styles.active : ''}`}
                    >
                      {route.name}
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;