import Image from 'next/image'
import styles from './page.module.css'
import { Header } from './components/header/header'
import { Middle } from './components/Middle/middle'
import { Footer } from './components/footer/footer'
import { Titulo } from './components/titulo/titulo'

export default function Home() {
  return (
    <body>
      <div>
        <Header/>
        <Middle imagem={"/rafiki 2.svg"} titulo={"Boas vindas a Lacrei Saúde"} exibirBotoes = {true} exibirParagrafo = {false}></Middle>
        <Footer></Footer>
      </div>
    </body>
  )
}
