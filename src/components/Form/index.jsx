import { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = (peso, altura) => {
        const alturaMetros = altura / 100; 
        const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
        setResultado(imc);

        
        const classificarIMC = (imc) => {
            if (imc < 18.5) {
                return 'MAGREZA';
            } else if (imc >= 18.5 && imc <= 24.9) {
                return 'NORMAL';
            } else if (imc >= 25.0 && imc <= 29.9) {
                return 'SOBREPESO';
            } else if (imc >= 30.0 && imc <= 39.9) {
                return 'OBESIDADE';
            } else {
                return 'OBESIDADE GRAVE';
            }
        };

        
        const classificacao = classificarIMC(imc);
        setClassificacao(classificacao);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        calcularIMC(peso, altura);
    }

    return (
        <div className="container">
            <form className={styles.form} onSubmit={handleSubmit}>
                <input value={altura} onChange={(e) => setAltura(e.target.value)} className={styles.input} required type="number" placeholder='Digite sua altura sem virgula' />
                <input value={peso} onChange={(e) => setPeso(e.target.value)} className={styles.input} required type="number" placeholder='Digite seu peso' />
                <button className={styles.button} type='submit'>Calcular</button>
            </form>
            <h3 className={styles.resultado}>Seu IMC é: {resultado} e sua classificação é: {classificacao}</h3>
        </div>
    )
}

export default Form;