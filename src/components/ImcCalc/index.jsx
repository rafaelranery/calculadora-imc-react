import { useEffect, useState } from 'react';
import styles from './ImcCalc.module.css';
import ImcProductContainer from '../ImcProductContainer';

const ImcCal = () => {

    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [imc, setImc] = useState(0);
    const [classImc, setClassImc] = useState('')
    const [allInputsValid, setAllInputsValid] = useState(false);
    const [imcValid, setImcValid] = useState(false);

    // useEffect(() => {
    //     console.log(`A altura mudou para ${height} = ${typeof height}`);
    // }, [height]);
    // useEffect(() => {
    //     console.log(`O peso mudou para ${weight} = ${typeof weight}`);
    // }, [weight]);
    useEffect(() => {
        console.log(`O imc mudou para ${imc} = ${typeof imc}`);
        imcValidator();
        checkClassImc();
    }, [imc]);
    // useEffect(() => {
    //     console.log(`O validador mudou para ${allInputsValid} = ${typeof allInputsValid}`);
    // }, [allInputsValid])
    // useEffect(() => {
    //     console.log(`O validador imc mudou para ${imcValid} = ${typeof imcValid}`);
    // }, [imcValid]);
    useEffect(() => {
        console.log(`A classImc mudou para ${classImc}`);
    }, [classImc])

    const inputValidator = () => {
        if (isNaN(height) || isNaN(weight) || height === 0 || weight === 0) {
            return setAllInputsValid(false)
        } else {
            return setAllInputsValid(true)
        };
    };

    const imcValidator = () => {
        if (isNaN(imc) || imc === 0) {
            return setImcValid(false)
        } else {
            return setImcValid(true)
        }
    };

    const imcOperation = () => {
        const imcTemp = (weight / (height * height));
        return setImc(imcTemp);
    };

    const checkClassImc = () => {
        if (imc < 18.5) {
            return setClassImc('magreza')
        } if (imc >= 18.5 && imc <= 24.9) {
            return setClassImc('normal')
        } if (imc >= 25.0 && imc <= 29.9) {
            return setClassImc('sobrepeso')
        } if (imc >= 30.0 && imc <= 39.9) {
            return setClassImc('obesidade')
        } if (imc >= 40) {
            return setClassImc('obesidade grave')
        }
    }

    const clearValues = () => {
        setHeight(0);
        setWeight(0);
        setImc(0);
    }


    return (
        <form className={styles.imcCalc}>
            <div className={styles.imcCalc__inputContainer}>
                <div className={styles.imcCalc__inputContainer__inputGroup}>
                    <label htmlFor="height-input">
                        Insira sua altura:
                    </label>
                    <input id="height-input" type="number" min="0" max="3" step="0.1" placeholder='1.70'
                        onChange={e => { setHeight(parseFloat(e.target.value)) }} />
                </div>
                <div className={styles.imcCalc__inputContainer__inputGroup}>
                    <label htmlFor="weight-input">
                        Insira seu peso:
                    </label>
                    <input id="weight-input" type="number" min="0" placeholder='50'
                        onChange={e => { setWeight(parseFloat(e.target.value)) }}
                    />
                </div>
            </div>
            <div className={styles.imcCalc__buttonGroup}>
                <button className={`${styles.imcCalc__buttonGroup__button} ${styles.imcCalc__buttonGroup__buttonCalc}`} type="button" 
                    onClick={(e) => {
                        imcOperation();
                        inputValidator();
                    }}
                >
                    Calcular
                </button>
                <button className={`${styles.imcCalc__buttonGroup__button} ${styles.imcCalc__buttonGroup__buttonClean}`} type="reset" 
                    onClick={() => {
                        clearValues();
                    }}
                >
                    Limpar
                </button>
            </div>
            {imcValid && (
                <ImcProductContainer imc={imc} classImc={classImc} allInputsValid={allInputsValid} imcValid={imcValid}/>
            )}
        </form>
    )
}

export default ImcCal;