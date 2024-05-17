import styles from './Resultados.module.css';

const Resultados = ({ items }) => {
    return (
        <>
        <div className="container">
            <ul className={styles.items}> {items.map((item) => (
                <li key={item.id} className={styles.item}>
                    <h2 className={styles.text}>
                        <span className={styles.span}>{item.imc}</span>
                        <span className={styles.span}>{item.classificacao}</span> 
                        
                    </h2>
                </li>
            ))}
            </ul>
        </div>
        </>
    );
};

export default Resultados;
