import {Bigger, Principal} from "./style.js"
import Image from "next/image.js"

import styles from "./style.module.css"
import { StaticImport } from "next/dist/shared/lib/get-img-props.js"
import { Titulo } from "../titulo/titulo.tsx"

interface MeuComponenteProps{
    exibirBotoes?: boolean;
    exibirParagrafo?: boolean;
    imagem: string;
    titulo: string;
    paragrafo?: string;

}

export function Middle({ imagem, titulo,paragrafo,exibirBotoes = false, exibirParagrafo =true} : MeuComponenteProps){
    return(
        <Principal>
            <div>
                <Titulo titulo={titulo}></Titulo>
                {exibirParagrafo &&(
                    <>
                    <p>{paragrafo}</p>
                    </>
                )}

               {exibirBotoes && (
                   <>
                   <p className="description">Uma plataforma segura e acolhedora para a comunidade LGBTQIAPN+</p>
                   <div className={styles.buttons_container}>
                    <a href="/pessoa-usuaria"className={styles.user_btn}>Pessoa Usuária</a>
                    <a href="/profissional" className={styles.pro_btn}>Profssional</a>
                </div>
                     </>
                )}
            </div>
            <div>
            <Image
          className={styles.logo}
          src={imagem}
          alt="Imagem"
          width={555}
          height={421}
          priority
            />

            </div>
        </Principal>
    )
}