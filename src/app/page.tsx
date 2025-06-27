import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/assets/logo.png"


export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.sectionWpp}/>
          
        
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
            <button className={styles.buttonWpp}>
              <h4 className={styles.desc}>
                Whatsapp - CHAME AGORA
              </h4>
            </button>
          </div>
          <h4 className={styles.desc}>
            GUINCHO EM SÃO PAULO - SOCORRO RÁPIDO - ATENDO TODAS AS REGIÕES
          </h4>
        </section>
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
