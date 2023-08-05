import { Middle } from "../components/Middle/middle";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";

export default function Page() {
  return (
    <body>
      <div>
        <Header></Header>
        <Middle
          imagem={"/rafiki 1.svg"}
          titulo={"Pessoa Usuária"}
          exibirBotoes={false}
          paragrafo="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
             realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
        ></Middle>
        <Footer></Footer>
      </div>
    </body>
  );
}
