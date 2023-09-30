import { Middle } from "../components/Middle/middle";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";

export default function Page() {
  return (
      <div>
        <Header></Header>
        <Middle
          imagem={"/profissional 1.svg"}
          titulo={"Profissional"}
          exibirBotoes={false}
          paragrafo="Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades
             e se comprometam com o bem-estar da comunidade LGBTQIAPN+"
        ></Middle>
        <Footer></Footer>
      </div>
  );
}
