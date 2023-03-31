import styles from './Header.module.css';

const Header = () => {


    return (
        <header className={styles.header}>
            <h1 className={styles.title} >Calculadora IMC</h1>
            <h2 className={styles.subtitle} >Descubra seu Índice de Massa Corporal</h2>
            <p className={styles.disclaimer}>* Em caso de dúvida sobre as informações, consulte um especialista *</p>
        </header>
    )
}

export default Header;