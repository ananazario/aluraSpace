import React from "react";
import home from '../../Imagens/icones/home.png';
import maisCurtidas from '../../Imagens/icones/mais-curtidas.png';
import maisVistas from '../../Imagens/icones/mais-vistas.png';
import novas from '../../Imagens/icones/novas.png';
import surpreendaMe from '../../Imagens/icones/surpreenda-me.png';
import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="" />
                    <a href="/">Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt="" />
                    <a href="/">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt="" />
                    <a href="/">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt="" />
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendaMe} alt="" />
                    <a href="/">Surpreenda-se</a>
                </li>
            </ul>
        </nav>
    )
}