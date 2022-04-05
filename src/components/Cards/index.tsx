import { ReactNode } from "react";
import { Card } from "./styles";

interface CardsProps {
  children: ReactNode;
}

const Cards = ({ children }: CardsProps) => {
  return <Card>{children}</Card>;
};

export default Cards;
