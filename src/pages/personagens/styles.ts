import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Content = styled.main``;

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

  gap: 103px;

  color: var(--red);
  z-index: 1;
  transform: scale(1.3);
`;

export const Img = styled.img`
  position: relative;
  margin-right: auto;
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

export const CardSelectorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: 0;

  width: 290px;
  height: 234px;

  border-radius: 24px;
  background: linear-gradient(var(--red) 5%, transparent 120%);
  color: white;

  h2 {
    font-size: 1.25rem;
    font-family: "Axiforma";
    font-weight: 700;

    margin-top: 28px;
    margin-bottom: 8px;
  }

  p {
    width: 243px;
    height: 123px;

    font-size: 0.75rem;
    font-family: "Axiforma";
    font-weight: 100;

    text-align: left;
  }

  span {
    font-size: 1.25rem;
    font-family: "Axiforma";
    font-weight: 100;

    margin-top: 12px;

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
