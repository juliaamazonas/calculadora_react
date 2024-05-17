import styles from './Header.module.css';

const Header = () => {
    return (
        <div className="container">
            <header className={styles.header}>
                <h1 className={styles.title}>Calculadora de IMC</h1>
            </header>
        </div>
    )
}

export default Header;