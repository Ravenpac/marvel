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

interface HQProps {
  id: number;
  name: string;
  resume: string;
  movies: any[];
  picture: StaticImageData;
  avaible: StaticImageData[];
  stars: number;
}

const HQ = () => {
  const { hqs } = useSelector((state: RootState) => state.hqs);
  const [openModal, setOpenModal] = useState(false);
  const [present, setPresent] = useState(0);
  const [hqDetails, setHQDetails] = useState<HQProps>({} as HQProps);

  const handleNextHQ = () => {
    setPresent(present === hqs.length - 1 ? 0 : present + 3);
  };

  const handleHQDetails = (id: number) => {
    const hq = hqs.find(({ id: idList }) => idList === id);

    setHQDetails(hq);
    setOpenModal(true);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MARVEL - Quadrinhos</title>
      </Head>

      <Page>
        <Content style={openModal ? { opacity: 0.1 } : {}}>
          <Navbar />
          <Carousel>
            <CardSelector>
              {hqs.map((hq, h) => {
                return (
                  <Slider
                    key={hq.id}
                    presentSlide={h === present ? "active" : "active"}
                  >
                    <Cards>
                      <Img src={hq.picture.src} alt={hq.name} />
                      <CardSelectorInfo>
                        <div>
                          <h2>{hq.name}</h2>
                          <p>{hq.resume}</p>
                        </div>
                        <span onClick={() => handleHQDetails(hq.id)}>
                          ver detalhes
                        </span>
                      </CardSelectorInfo>
                    </Cards>
                  </Slider>
                );
              })}
              {hqs.length >= 3 && (
                <img
                  src={Arrow.src}
                  alt="Próximo"
                  onClick={handleNextHQ}
                  style={{ cursor: "pointer" }}
                />
              )}
            </CardSelector>
          </Carousel>
          <BackgroundImg
            boxShadow="150%"
            width="50%"
            height="calc(100vh - 114px)"
          />
        </Content>
        {openModal && (
          <Modal
            closeModal={() => setOpenModal(false)}
            info={hqDetails}
            etc={["Disponível para compra:", "Crítica"]}
          />
        )}
      </Page>
    </>
  );
};

export default HQ;
