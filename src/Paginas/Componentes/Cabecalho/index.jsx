import styles from './Cabecalho.module.scss'
import logo from '../../Imagens/logo.png'
import search from '../../Imagens/search.png'

export default function Cabecalho () {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo da Alura Space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text"placeholder="O que você procura?" />
                <img src={search} alt="Ícone da lupa" />
            </div>
        </header>
    )
}