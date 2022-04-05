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
} from "./styles";
import Slider from "./styles";
import Head from "next/head";
import BackgroundImg from "../../components/BackgroundImg";
import { Modal } from "../../components/DetailsModal";

interface AvengerProps {
  id: number;
  name: string;
  resume: string;
  movies: string[];
  picture: StaticImageData;
  avaible: string[];
  stars: number;
}

const Characters = () => {
  const { avengers } = useSelector((state: RootState) => state.avengers);
  const [openModal, setOpenModal] = useState(false);
  const [present, setPresent] = useState(0);
  const [avengerDetails, setAvengerDetails] = useState<AvengerProps>(
    {} as AvengerProps
  );

  const handleNextAvenger = () => {
    setPresent(present === avengers.length - 1 ? 0 : present + 3);
  };

  const handleAvengerDetails = (id: number) => {
    const avenger = avengers.find(({ id: idList }) => idList === id);

    setAvengerDetails(avenger);
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
            <CardSelector>
              {avengers.map((avenger, a) => {
                return (
                  <Slider
                    key={avenger.id}
                    presentSlide={a === present ? "slide" : "active"}
                  >
                    <Cards>
                      <Img src={avenger.picture.src} alt={avenger.name} />
                      <CardSelectorInfo>
                        <div>
                          <h2>{avenger.name}</h2>
                          <p>{avenger.resume}</p>
                        </div>
                        <span onClick={() => handleAvengerDetails(avenger.id)}>
                          ver detalhes
                        </span>
                      </CardSelectorInfo>
                    </Cards>
                  </Slider>
                );
              })}
              {avengers.length > 3 && (
                <img
                  src={Arrow.src}
                  alt="Próximo"
                  onClick={handleNextAvenger}
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
            info={avengerDetails}
            etc={["Aparições:", "Avaliações dos Fãs:"]}
          />
        )}
      </Page>
    </>
  );
};

export default Characters;
