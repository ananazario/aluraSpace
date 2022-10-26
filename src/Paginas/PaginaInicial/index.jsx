import Cabecalho from "../Componentes/Cabecalho";
import Galeria from "../Componentes/Galeria";
import Menu from "../Componentes/Menu";
import Populares from "../Componentes/Populares";
import Rodape from "../Componentes/Rodape";
import banner from '../Imagens/banner.png'
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial () {
    return (
        <>
            <Cabecalho />
            <main>
                    <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria completa do espaço</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
                <div className={styles.galeria}>
                <Galeria />
                <Populares />
                </div>
            </main>

            <footer>
                <Rodape />        
            </footer>
        </>
    )
}