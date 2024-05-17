import { useState } from 'react';

import Header from "./components/Header";
import Form from "./components/Form";
import Resultados from "./components/Resultados";

function App() {
  const items = [
    { id: 1, imc: 'MENOR QUE 18,5:', classificacao: 'MAGREZA'},
    { id: 2, imc: 'ENTRE 18,5 E 24,9:', classificacao: 'NORMAL'},
    { id: 3, imc: 'ENTRE 25,0 E 29,9:', classificacao: 'SOBREPESO'},
    { id: 4, imc: 'ENTRE 30,0 E 39,9:', classificacao: 'OBESIDADE'},
    { id: 5, imc: 'MAIOR QUE 40,0:', classificacao: 'OBESIDADE GRAVE'}
];

const [imc, setImc] = useState('');

const calcularIMC = (peso, altura) => {
  const alturaMetros = altura / 100;
  const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
  setImc(imcCalculado);

}

  
  return (
    <>
      <Header />
      <Form/>
      {imc && <Resultados items={items} />}
    </>

  )

}

export default App
