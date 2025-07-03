// import s from './style.css'
import Image from "next/image";
import logo from "@/assets/logo.png"

import s from "./index.module.css"

const detailsResgate = [
    '- Resgate em Estradas',
    '- Transporte de Veículos',
    '- Assistência em Emergência',
    '- Guincho para Veículos Leves',
    '- Carros, Motos, Vans',
    '- Utilitários',
    '- Maquinários',
    '- Blindados',
    '- Barcos',
]

const detailsPrice = [
    '- Preço Justo',
    '- Serviço de qualidade',
    '- Sempre pronto para te ajudar',
    '- Atendo Todas as Regiões',
    '- Emitimos nota fiscal',
]

const hours = [
    '- Trabalho com serviços agendados',
    '- Deixe tudo programado para transportar seu veículo!',
]

export const Details = () => {

    return (
        <div className={s.container} >
            {/* <h2> */}
            <div className={s.column}>
                <div className={s.row}>
                    <Image
                        className={s.image}
                        src={logo}  // Caminho relativo à pasta public
                        alt="Logo Paiva Guincho"
                        width={100}                // Largura da imagem
                        height={100}               // Altura da imagem
                    />
                    <div className={s.containerDetails}>
                        {
                            detailsResgate.map((item, index) => (
                                <h2 key={index} className={s.desc}>
                                    {item}
                                </h2>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={s.column} style={{ alignItems: 'flex-start' }}>
                <div className={s.row}>
                    <Image
                        className={s.image}
                        src={logo}  // Caminho relativo à pasta public
                        width={100}                // Largura da imagem
                        height={100}               // Altura da imagem
                        alt="Logo Paiva Guincho"
                    />
                    <div className={s.containerDetails}>
                        {
                            detailsPrice.map((item, index) => (
                                <h2 key={index} className={s.desc}>
                                    {item}
                                </h2>
                            ))
                        }
                    </div>
                </div>

                <div className={s.row}>
                    <Image
                        className={s.image}
                        src={logo}  // Caminho relativo à pasta public
                        alt="Logo Paiva Guincho"
                        width={100}                // Largura da imagem
                        height={100}               // Altura da imagem
                    />
                    <div className={s.containerDetails}>
                        {
                            hours.map((item, index) => (
                                <h2 key={index} className={s.desc}>
                                    {item}
                                </h2>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}