import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrow from './assets/leftarrow.png';
import { levels, calculateImc, Level } from './helpers/imc';
import GridItem from './components/GridItem';

function App() {

  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [mostraItem, setMostraItem] = useState<Level | null>(null);

  const handleCalculateIMC = () => {
    if(altura && peso) {

      setMostraItem(calculateImc(altura, peso))

    } else {
      alert("Digite todos os campos!!!")
    }
  }

  const handleBackButton = () => {
    setMostraItem(null)
    setAltura(0)
    setPeso(0)
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
            <img src={poweredImage} width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corporal, parâmentro adota pelo
            Organização Mundial da Saúde para calcular o peso ideal para cada pessoa.
          </p>

           <input 
            placeholder="Digite a sua altura. Ex: 1.8 (em metros)"
            type="number"
            value={(altura > 0) ? altura : ''}
            onChange={e => setAltura(parseFloat(e.target.value))}
            disabled={mostraItem ? true : false}
          />

          <input 
            placeholder="Digite a seu peso. Ex: 75.3 (em quilogramas)"
            type="number"
            value={(peso > 0) ? peso : ''}
            onChange={e => setPeso(parseFloat(e.target.value))}
            disabled={mostraItem ? true : false}
          />

          <button onClick={handleCalculateIMC} disabled={mostraItem ? true : false}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          {!mostraItem &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }

          {mostraItem &&
            <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handleBackButton}>
                  <img src={leftArrow} width={25} />
                </div>
                <GridItem item={mostraItem} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
