import { Img } from "../../pages/personagens/styles";
import Cards from "../Cards";
import {
  Avaible,
  Container,
  Details,
  MovieName,
  Movies,
  Paragraph,
  Note,
  Title,
} from "./styles";
import { Rating } from "react-simple-star-rating";
import { FaRegTimesCircle } from "react-icons/fa";
import Amazon from "../../../public/images/amazon.png";
import Americanas from "../../../public/images/americanas.png";
import Disney from "../../../public/images/disney.png";

interface ModalProps {
  info: {
    id: number;
    name: string;
    resume: string;
    movies: any[];
    picture: StaticImageData;
    avaible: any[];
    stars: number;
  };
  closeModal: () => void;
  etc: string[];
}

export const Modal = ({ info, closeModal, etc }: ModalProps) => {
  return (
    <Container>
      <Cards>
        <Img src={info.picture.src} alt={info.name} />
        <Details>
          <div>
            <Title>{info.name}</Title>
            {etc[1] === "Crítica" && <Paragraph>{info.resume}</Paragraph>}
            <Movies>
              <MovieName>{etc[0]}</MovieName>
              {info.movies.map(
                (i) => etc[1] !== "Crítica" && <Paragraph>{i}</Paragraph>
              )}
              {etc[0] === "Disponível para compra:" && (
                <>
                  <Avaible src={Americanas.src} alt="Americanas" />
                  <Avaible src={Amazon.src} alt="Amazon" />
                </>
              )}
              {etc[0] === "Disponível em streaming:" && (
                <Avaible src={Disney.src} alt="Disney" />
              )}

              <Note>{etc[1]}</Note>
              <div>
                <Rating
                  ratingValue={0}
                  initialValue={info.stars}
                  fillColor={"#FF9C00"}
                  size={32}
                  readonly
                />
              </div>
            </Movies>
          </div>
          <FaRegTimesCircle
            onClick={closeModal}
            style={{
              position: "absolute",
              cursor: "pointer",
              zIndex: "100",
              bottom: "5%",
              right: "5%",
              fontSize: "1.875rem",
            }}
          />
        </Details>
      </Cards>
    </Container>
  );
};
