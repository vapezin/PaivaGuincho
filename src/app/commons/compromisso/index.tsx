// import s from './style.css'
import Image from "next/image";
import logo from "@/assets/logo.png"

import s from "./index.module.css"
import { ButtonWpp } from '../buttonWpp';

export const Compromisso = () => {

    return (
        <div className={s.container} >
            <section className={s.bg} />
            <div className={s.containerDetails}>
                <Image
                    src={logo}  // Caminho relativo à pasta public
                    alt="Logo Paiva Guincho"
                    width={200}                // Largura da imagem
                    height={100}               // Altura da imagem
                />
                <h2 className={s.title}>
                    MEU COMPROMISSO É COM VOCÊ
                </h2>
                <h3 className={s.desc}>
                    Estou Aqui para Ajudar!
                </h3>
            </div>
        </div>
    )
}