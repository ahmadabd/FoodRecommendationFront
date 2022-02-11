import styles from '../styles/Layout.module.css';
import Header from './Header';
import Meta from './Meta';
import Nav from './Nav';

const Layout = ({children} : any ) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.main}>    
                <Header />
                <div className={styles.container}>
                {children}
                </div>
            </div>
        </>
    );
}

export default Layout;