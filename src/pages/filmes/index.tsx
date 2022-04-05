import Navbar from "../../components/Navbar";
import { useState } from "react";
import { RootState } from "../../Redux/store";
import Cards from "../../components/Cards";
import Arrow from "../../../public/images/arrow.png";
import { useSelector } from "react-redux";
import {
  CardSelector,
  CardSelectorInfo,
  Carousel,
  Content,
  Img,
  Page,
  SelectPer,
  Slider,
} from "./styles";
import Option from "./styles";
import Head from "next/head";
import BackgroundImg from "../../components/BackgroundImg";
import { Modal } from "../../components/DetailsModal";

interface MovieProps {
  id: number;
  name: string;
  resume: string;
  movies: String[];
  picture: StaticImageData;
  avaible: any[];
  stars: number;
}

const Movies = () => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const [openModal, setOpenModal] = useState(false);
  const [present, setPresent] = useState(0);
  const [movieDetails, setMovieDetails] = useState<MovieProps>(
    {} as MovieProps
  );

  const handleNextMovie = () => {
    setPresent(present === movies.length - 1 ? 0 : present + 3);
  };

  const handleMovieDetails = (id: number) => {
    const movie = movies.find(({ id: idList }) => idList === id);

    setMovieDetails(movie);
    setOpenModal(true);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MARVEL - Personagens</title>
      </Head>

      <Page>
        <Content style={openModal ? { opacity: 0.1 } : {}}>
          <Navbar />
          <Carousel>
            <SelectPer>
              <Option value={""}>Filtrar por</Option>
              <Option value={"Lançamento"}>Lançamento</Option>
              <Option value={"Cronologia"}>Cronologia</Option>
            </SelectPer>
            <CardSelector>
              {movies.map((movie, m) => {
                return (
                  <Slider
                    key={movie.id}
                    presentSlide={m === present ? "slide" : "active"}
                  >
                    <Cards>
                      <Img src={movie.picture.src} alt={movie.name} />
                      <CardSelectorInfo>
                        <div>
                          <h2>{movie.name}</h2>
                          <p>{movie.resume}</p>
                        </div>
                        <span onClick={() => handleMovieDetails(movie.id)}>
                          ver detalhes
                        </span>
                      </CardSelectorInfo>
                    </Cards>
                  </Slider>
                );
              })}
              {movies.length > 3 && (
                <img
                  src={Arrow.src}
                  alt="Próximo"
                  onClick={handleNextMovie}
                  style={{ cursor: "pointer" }}
                />
              )}
            </CardSelector>
          </Carousel>
          <BackgroundImg
            boxShadow="150%"
            width="50%"
            height="calc(100vh - 7.125rem)"
          />
        </Content>
        {openModal && (
          <Modal
            closeModal={() => setOpenModal(false)}
            info={movieDetails}
            etc={["Disponível em streaming:", "Crítica"]}
          />
        )}
      </Page>
    </>
  );
};

export default Movies;
