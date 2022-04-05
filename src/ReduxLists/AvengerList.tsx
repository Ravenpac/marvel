import Wanda from "../../public/images/wanda.png";
import Hulk from "../../public/images/hulk.png";
import Thanos from "../../public/images/thanos.png";
import SpiderMan from "../../public/images/spider-man.png";

const Avengers = [
  {
    id: 1,
    name: "Homem-Aranha",
    resume:
      "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
    movies: [
      "Capitão América: Guerra Civil",
      "Homem-Aranha: De Volta ao Lar",
      "Vingadores: Guerra Infinita",
      "Vingadores: Ultimato",
      "Homem-Aranha: Longe de Casa",
      "Homem-Aranha: Sem Volta para Casa",
    ],
    picture: SpiderMan,
    avaible: [],
    stars: 5,
  },
  {
    id: 2,
    name: "Wanda Maximoff",
    resume:
      "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
    movies: [
      "Vingadores: Era de Ultron",
      "Capitão América: Guerra Civil",
      "Vingadores: Guerra Infinita",
      "Vingadores: Ultimato",
      "WandaVision",
    ],
    picture: Wanda,
    avaible: [],
    stars: 4,
  },
  {
    id: 3,
    name: "Thanos",
    resume:
      "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
    movies: [
      "Vingadores",
      "Guardiões da Galáxia: vol. 1",
      "Vingadores: Guerra Infinita",
      "Vingadores: Ultimato",
    ],
    picture: Thanos,
    avaible: [],
    stars: 5,
  },
  {
    id: 4,
    name: "Hulk",
    resume:
      "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
    movies: [
      "Vingadores",
      "Vingadores: Era de Ultron",
      "Thor: Ragnarok",
      "Vingadores: Guerra Infinita",
      "Vingadores: Ultimato",
    ],
    picture: Hulk,
    avaible: [],
    stars: 4,
  },
];

export default Avengers;
