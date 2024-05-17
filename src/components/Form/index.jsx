import { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');

    const handleSubimt = (event) => {
        event.preventDefault();
        const alturaMetros = altura / 100; 
        const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
        setResultado(imc);
    }

    return (
        <div className="container">
            <form className={styles.form} onSubmit={handleSubimt}>
                <input value={altura} onChange={(e) => setAltura(e.target.value)} className={styles.input} required type="number" placeholder='Digite sua altua sem pontuação' />
                <input value={peso} onChange={(e) => setPeso(e.target.value)} className={styles.input} required type="number" placeholder='Digite seu peso' />
                <button className={styles.button} type='submit'>Calcular</button>
            </form>
            <h3 className={styles.resultado}>Seu IMC é: {resultado} </h3>
        </div>
    )
}

export default Form;