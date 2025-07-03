// import s from './style.css'
import Image from "next/image";
import logo from "@/assets/logo.png"

import s from "./index.module.css"
import { ButtonWpp } from '../buttonWpp';

export const Trabalho = () => {

    return (
        <div className={s.container} >
            <div className={s.containerDetails}>
                <h2 className={s.title}>
                    MEU COMPROMISSO COM VOCÊ
                </h2>

                <h2 className={s.title}>
                    Na Ninão Guinchos, a satisfação do cliente é nossa prioridade. Comprometemo-nos a oferecer:
                </h2>
                <div className={s.padding}>
                    <div className={s.column}>
                        <div className={s.row}>
                            <div className={s.circle} />
                            <h2 className={s.topic} >
                                Agilidade:
                            </h2>
                        </div>
                        <h3 className={s.desc}>
                            Chegamos rápido para te ajudar em qualquer emergência.
                        </h3>
                    </div>
                    <div className={s.column}>
                        <div className={s.row}>
                            <div className={s.circle} />
                            <h2 className={s.topic} >
                                Confiabilidade:
                            </h2>
                        </div>
                        <h3 className={s.desc}>
                            Serviços realizados por profissionais experientes e treinados.
                        </h3>
                    </div>
                    <div className={s.column}>
                        <div className={s.row}>
                            <div className={s.circle} />
                            <h2 className={s.topic} >
                                Segurança:
                            </h2>
                        </div>
                        <h3 className={s.desc}>
                            Equipamentos modernos e procedimentos seguros em todas as operações.
                        </h3>
                    </div>

                </div>
                <ButtonWpp title="FAÇA UM ORÇAMENTO" />
            </div>


            <div className={s.containerDetails}>
                <h2 className={s.title}>
                    Conheça meu trabalho:
                </h2>
                <Image
                    className={s.image}
                    src={logo}  // Caminho relativo à pasta public
                    alt="Logo Paiva Guincho"
                    width={400}                // Largura da imagem
                    height={400}               // Altura da imagem
                />
            </div>
        </div>
    )
}