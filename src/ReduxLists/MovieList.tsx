import Marvel from "../../public/images/capita-marvel.png";
import Disney from "../../public/images/disney.png";
import IronMan from "../../public/images/iron-man.png";
import IronMan2 from "../../public/images/iron-man-2.png";
import Thor from "../../public/images/thor.png";

const Movies = [
  {
    id: 1,
    name: "Homem de Ferro",
    resume:
      "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
    movies: [],
    picture: IronMan,
    avaible: [Disney],
    stars: 3,
  },
  {
    id: 2,
    name: "Homem de Ferro 2",
    resume:
      "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas",
    movies: [],
    picture: IronMan2,
    avaible: [Disney],
    stars: 4,
  },
  {
    id: 3,
    name: "Thor",
    resume:
      "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ",
    movies: [],
    picture: Thor,
    avaible: [Disney],
    stars: 2,
  },
  {
    id: 4,
    name: "Capitã Marvel",
    resume:
      "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. ",
    movies: [],
    picture: Marvel,
    avaible: [Disney],
    stars: 4,
  },
];

export default Movies;
