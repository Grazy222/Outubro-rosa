import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./global";
import Logomarca from "./assets/logo.png";
import Mulher from "./assets/mulher-background.png";
import Menina from "./assets/menina.png";

const Header = styled.header`
  background-color: #ffa0d9;
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  list-style: none;
`;

const H2 = styled.h2`
  color: #ffa0d9;
`;

const P = styled.p`
  margin: 10px;
  border-radius: 20px;

  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;

  background-color: #ffa0d9;
`;

export default function App() {
  const conteudo = [
    {
      posicao: 1,
      frase: "Nódulo palpável na mama."
    },

    {
      posicao: 2,
      frase: "Pele avermelhada ou retraída, sem resposta a tratamentos tópicos;"
    },

    {
      posicao: 3,
      frase:
        "Alterações no mamilo, incluindo a inversão do mamilo ou a saída anormal de secreção"
    },

    {
      posicao: 4,
      frase: "Dor ou inchaço em parte ou na totalidade das mamas"
    },

    {
      posicao: 5,
      frase: "Nódulos cervicais ou na axila"
    }
  ];

  return (
    <>
      <GlobalStyle />
      <Header>
        <img src={Logomarca} alt="logo do outubro rosa" />
        <Ul>
          <li>CARTILHA </li>
          <li>FOLHETO COLO DO ÚTERO</li>
          <li>FOLHETO MAMA</li>
          <li>KIT MATERIAIS</li>
        </Ul>
      </Header>

      <main>
        <section>
          <H2>
            Os principais sinais de alerta ou sintomas do câncer de mama são:
          </H2>
        </section>

        <div>
          {conteudo.map((item) => (
            <P>
              {item.posicao} {item.frase}
            </P>
          ))}

          <img src={Mulher} alt="figura de uma mulher" />
        </div>
      </main>

      <footer>
        <a
          href="https://www.gov.br/inca/pt-br"
          target="_blank"
          rel="noreferrer"
        >
          Instituto Nacional de Câncer - INCA
        </a>
        <img src={Menina} alt="figura de uma menina" />
        <a
          href="https://www.uicc.org/events/special-focus-dialogue-rethinking-pink-october-how-increase-engagement-public-virtually"
          target="_blank"
          rel="noreferrer"
        >
          Union for International Cancer Control (UICC)
        </a>
      </footer>
    </>
  );
}
