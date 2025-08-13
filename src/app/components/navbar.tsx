import { FC } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link href="/" className={styles.link}>
          About Me
        </Link>
        <Link href="/portfolio" className={styles.link}>Portfolio</Link>
      </div>
      <div className={styles.right}>
        <Link href="/" className={styles.brand}>Kamal’s Info</Link>
      </div>
    </nav>
  );
};

export default Navbar;
