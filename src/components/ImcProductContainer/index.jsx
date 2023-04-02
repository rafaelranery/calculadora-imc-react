import styles from './ImcProductContainer.module.css'

const ImcProductContainer = ({ imc, classImc, allInputsValid }) => {

    let needsMedicalSupport = false;

    const bgClassSet = () => {
        switch (classImc) {
            case 'magreza':
                return 'caution'

            case 'normal':
                return 'normal';

            case 'sobrepeso':
                return 'caution';

            case 'obesidade':
                return 'danger';

            case 'obesidade grave':
                needsMedicalSupport = true;
                return 'emergency'

        }
    }

    const displayProduct = () => {
        if (allInputsValid) {
            return (
                <div className={styles.productContainer}>
                    <p className={`${styles.productContainer__imcValue} ${bgClassSet()}`}>{imc.toFixed(2)}</p>
                    <p className={styles.productContainer__imcClass} >O seu índice IMC é classificado como <span>'{classImc}'</span></p>
                    {needsMedicalSupport && (
                        <p className={styles.productContainer__imcHelpNeeded}>* É recomendada a procura de um médico ou profissional especializado. *</p>
                    )}
                </div>
            )
        } else {
            return (
                <p className={styles.errorMsg}>
                    Algo deu errado... Confira se sua altura e peso são valores válidos.
                </p>
            )
        }
    }

    return (
        displayProduct()
    )
}

export default ImcProductContainer;