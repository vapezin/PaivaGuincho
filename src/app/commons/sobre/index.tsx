// import s from './style.css'
import Image from "next/image";
import logo from "@/assets/logo.png"

import s from "./index.module.css"
import { ButtonWpp } from '../buttonWpp';

export const Sobre = () => {

    return (
        <div className={s.container} >
            <div className={s.containerDetails}>
                <h2 className={s.title}>
                    SOBRE MIM
                </h2>
                <h2 className={s.title}>
                    PAIVA GUINHCO - serviço de qualidade!
                </h2>
                <h3 className={s.desc}>
                    Ninão Guinchos
                    Na Ninão Guinchos, sou especializado em oferecer serviços de guincho rápidos e confiáveis, garantindo que você nunca fique na mão. Estou sempre  pronto para atender, independentemente das condições.
                </h3>
                <ButtonWpp title="FAÇA UM ORÇAMENTO" />
            </div>

            <Image
                className={s.image}
                src={logo}  // Caminho relativo à pasta public
                alt="Logo Paiva Guincho"
                width={400}                // Largura da imagem
                height={400}               // Altura da imagem
            />
        </div>
    )
}