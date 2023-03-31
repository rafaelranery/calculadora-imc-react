import TableImc from "../TableIMC";
import styles from './About.module.css';

const About = () => {


    return (
        <>
            <div className={styles.icmInfo}>
                <h3 className={styles.imcInfo__title}>Cálculo ICM</h3>
                <article className={styles.imcInfo__article}>
                    <p className={styles.imcInfo__article__p}>
                        IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                    </p>
                    <p className={styles.imcInfo__article__p}>
                        O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.
                    </p>
                    <p className={styles.imcInfo__article__p}>
                        Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.
                    </p>
                </article>
                {/* terminar de fazer a table; mas componentizala pois parece mais fácil em organização, assim fica o elemento do about e um elemento da tabela que o about utiliza */}
                <TableImc />
            </div>
        </>
    )
}

export default About;