import Link from "next/link";
import style from "../styles/Nav.module.css";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/random">Random Food</Link>
                </li>
                <li>
                    <Link href="/add">Add Food</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
