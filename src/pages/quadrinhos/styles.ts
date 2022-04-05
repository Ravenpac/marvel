import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.main`
  height: 100vh;
`;

export const Carousel = styled.section`
  display: flex;
  justify-content: center;
  float: right;
  position: absolute;

  height: 86%;
  width: 100vw;
`;

export const CardSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30%;

  gap: 6.43rem;

  color: var(--red);
  z-index: 1;
  transform: scale(1.3);
`;

export const Img = styled.img`
  position: relative;
  margin-right: auto;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
`;

export const CardSelectorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: 0;

  width: 18.0625rem;
  height: 14.625rem;

  border-radius: 1.5rem;
  background: linear-gradient(var(--red) 5%, transparent 120%);
  color: white;

  h2 {
    font-size: 1.25rem;
    font-family: "Axiforma";
    font-weight: 700;

    margin-top: 1.75rem;
    margin-bottom: 0.5rem;
  }

  p {
    width: 15.1875rem;
    height: 7.6875rem;

    font-size: 0.75rem;
    font-family: "Axiforma";
    font-weight: 100;

    text-align: left;
  }

  span {
    font-size: 1.25rem;
    font-family: "Axiforma";
    font-weight: 100;

    margin-top: 0.75rem;

    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

interface SliderProps {
  presentSlide: string;
}

const Slider = styled.div<SliderProps>`
  display: ${(props) => (props.presentSlide === "slide" ? "none" : "")};
`;

export default Slider;
