import { Header } from "./components/header/header";
import { Middle } from "./components/Middle/middle";
import { Footer } from "./components/footer/footer";
import Head from "next/head";

export default function Home() {
  return (
    <body>
      <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        

      
      <div>
        <Header />
        <Middle
          imagem={"/rafiki 2.svg"}
          titulo={"Boas vindas a Lacrei Saúde"}
          exibirBotoes={true}
          exibirParagrafo={false}
        ></Middle>
        <Footer></Footer>
      </div>
    </body>
  );
}
