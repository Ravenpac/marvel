import Amazon from "../../public/images/amazon.png";
import Americanas from "../../public/images/americanas.png";
import Vikings from "../../public/images/thorvikings.png";
import Wolverine from "../../public/images/origem.png";
import Surfista from "../../public/images/surfistaprateado.png";

const HQs = [
  {
    id: 1,
    name: "Thor: Vikings",
    resume:
      "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.",
    movies: [],
    picture: Vikings,
    avaible: [Americanas, Amazon],
    stars: 5,
  },
  {
    id: 2,
    name: "Surfista Prateado",
    resume:
      "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?",
    movies: [],
    picture: Surfista,
    avaible: [Americanas, Amazon],
    stars: 5,
  },
  {
    id: 3,
    name: "Wolverine",
    resume:
      "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. ",
    movies: [],
    picture: Wolverine,
    avaible: [Americanas, Amazon],
    stars: 5,
  },
];

export default HQs;
