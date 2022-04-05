import { Background } from "./styles";
import Vingadores from "../../../public/images/vingadores.jpeg";

interface GradientProps {
  boxShadow: string;
  width: string;
  height: string;
}

const BackgroundImg = ({ boxShadow, width, height }: GradientProps) => (
  <Background
    src={Vingadores.src}
    alt="Vingadores"
    boxShadow={boxShadow}
    width={width}
    height={height}
  />
);

export default BackgroundImg;
