import styles from './TableIMC.module.css'

const TableImc = () => {

    return (
        <table className={styles.imcTable}>
            <thead className={styles.imcTable__header}>
                <tr>
                    <td className={styles.imcTable__cell} colSpan="3">Classificação do IMC</td>
                </tr>
                <tr>
                    <td className={styles.imcTable__cell}>
                        IMC
                    </td>
                    <td className={styles.imcTable__cell}>
                        CLASSIFICAÇÂO
                    </td>
                    <td className={styles.imcTable__cell}>
                        OBSESIDADE(grau)
                    </td>
                </tr>
            </thead>
            <tbody className={styles.imcTable__body}>
                <tr>
                    <td className={styles.imcTable__cell}>Menor que 18,5</td>
                    <td className={styles.imcTable__cell}>Magreza</td>
                    <td className={styles.imcTable__cell}>0</td>
                </tr>
                <tr>
                    <td className={styles.imcTable__cell}>Entre 18,5 e 24,9</td>
                    <td className={styles.imcTable__cell}>Normal</td>
                    <td className={styles.imcTable__cell}>0</td>
                </tr>
                <tr>
                    <td className={styles.imcTable__cell}>ENTRE 25,0 E 29,9</td>
                    <td className={styles.imcTable__cell}>Sobrepeso</td>
                    <td className={styles.imcTable__cell}>I</td>
                </tr>
                <tr>
                    <td className={styles.imcTable__cell}>ENTRE 30,0 E 39,9</td>
                    <td className={styles.imcTable__cell}>Obesidade</td>
                    <td className={styles.imcTable__cell}>II</td>
                </tr>
                <tr>
                    <td className={styles.imcTable__cell}>MAIOR QUE 40,0</td>
                    <td className={styles.imcTable__cell}>Obesidade Grave</td>
                    <td className={styles.imcTable__cell}>III</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableImc;