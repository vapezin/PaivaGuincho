import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/assets/logo.png"

import { Details } from './commons/details';
import { Sobre } from './commons/sobre';
import { ButtonWpp } from './commons/buttonWpp';
import { Compromisso } from './commons/compromisso';
import { Trabalho } from './commons/trabalho';

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.sectionWpp} />

        <section className={styles.section}>
          <Image
            src={logo}  // Caminho relativo à pasta public
            alt="Logo Paiva Guincho"
            width={200}                // Largura da imagem
            height={200}               // Altura da imagem
          />
          <div className={styles.containerWpp}>
            <h2 className={styles.title}>
              Emergência? Precisa de um guincho agora?
            </h2>
            <h4 className={styles.subtitle}>
              Guincho rápido e confiável: Seu aliado nas estradas
            </h4>
            <ButtonWpp title="Whatsapp - CHAME AGORA" />
          </div>
          <h4 className={styles.desc}>
            GUINCHO EM SÃO PAULO - SOCORRO RÁPIDO - ATENDO TODAS AS REGIÕES
          </h4>
        </section>
        <Details />
        <Sobre />
        <Compromisso />
        <Trabalho />
        <section className={styles.section}>
          <h1>
            text
          </h1>
        </section>
        <section className={styles.section}>
          <h1>
            text
          </h1>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}
