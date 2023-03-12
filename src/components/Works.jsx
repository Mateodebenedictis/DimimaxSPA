import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";
import { useTranslation } from "react-i18next";
import FuitDescription from "../assets/texts/FuitDescription"

import Apple from "./3d_files/Apple";
import Cherries from "./3d_files/Cherries";
import Grape from "./3d_files/Grape";
import Grapefruit from "./3d_files/Grapefruit";
import Kiwi from "./3d_files/Kiwi";
import Lemon from "./3d_files/Lemon";
import Melon from "./3d_files/Melon";
import Orange from "./3d_files/Orange";
import Peach from "./3d_files/Peach";
import Pear from "./3d_files/Pear";
import Plum from "./3d_files/Plum";
import Tangerine from "./3d_files/Tangerine";
import FruitRender from "./FruitRender";


const fruit = [
  <Apple />,
  <Cherries />,
  <Grape />,
  <Grapefruit />,
  <Kiwi />,
  <Lemon />,
  <Melon />,
  <Orange />,
  <Peach />,
  <Pear />,
  <Plum />,
  <Tangerine />,
];


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  column-count: 2;
  list-style: none;
  gap: 70px;
  
  @media only screen and (max-width: 768px) {}
`;

const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: transparent;
    -webkit-text-stroke: 1px white;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const { t } = useTranslation();
  const [work, setWork] = useState(0);

  const data = [
    t("apple"),
    t("cherries"),
    t("grape"),
    t("grapefuit"),
    t("kiwi"),
    t("lemon"),
    t("melon"),
    t("orange"),
    t("peach"),
    t("pear"),
    t("plum"),
    t("tangerine"),
  ];

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item, i) => (
              <ListItem key={i} text={item} onClick={() => setWork(i)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <FruitRender model={fruit[work]} desc={FuitDescription[work]} />
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
