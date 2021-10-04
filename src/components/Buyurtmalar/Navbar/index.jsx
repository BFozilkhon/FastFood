import React, { useState } from "react";
import plus from "../../../assets/icons/plus.svg";

import {
  Container,
  IconsWrapper,
  MenuH,
  MenuV,
  Plus,
  Tab,
  Tilte,
  Toggle,
  ToggleClone,
  Wrapper,
} from "./style";

export const Navbar = (props) => {
  const [isActive, setIsActive] = useState("Yangi");
  const [isTabActive, setIsTabActive] = useState(true);
  const [isPuls, setIsPuls] = useState(false);

  const onPuls = () => {
    setIsPuls(!isPuls);
  };

  return (
    <Container>
      <Wrapper align order="first">
        {/* {isPuls ? <h1>sadasdsasdas </h1> : <h1>aaa</h1>} */}
        <Plus onClick={onPuls} src={plus} alt="plus" />
        <Tilte>Yangi buyurtma qoshish</Tilte>
        <ToggleClone>
          <IconsWrapper
            active={isTabActive}
            onClick={() => {
              setIsTabActive(true);
              props.onClick(true);
            }}
          >
            <MenuV />
          </IconsWrapper>
          <IconsWrapper
            active={!isTabActive}
            onClick={() => {
              setIsTabActive(false);
              props.onClick(false);
            }}
          >
            <MenuH />
          </IconsWrapper>
        </ToggleClone>
      </Wrapper>
      <Wrapper order="second">
        <Tab active={isTabActive}>
          <Tab.Item
            onClick={() => {
              isTabActive && setIsActive("Yangi");
            }}
            active={isActive === "Yangi"}
          >
            Yangi
          </Tab.Item>
          <Tab.Item
            onClick={() => {
              isTabActive && setIsActive("Qabul qilingan");
            }}
            active={isActive === "Qabul qilingan"}
          >
            Qabul qilingan
          </Tab.Item>
          <Tab.Item
            onClick={() => {
              isTabActive && setIsActive("Jonatilgan");
            }}
            active={isActive === "Jonatilgan"}
          >
            Jo'natilgan
          </Tab.Item>
          <Tab.Item
            disable
            onClick={() => {
              isTabActive && setIsActive("Yopilgan");
            }}
            active={isActive === "Yopilgan"}
          >
            Yopilgan
          </Tab.Item>
        </Tab>
      </Wrapper>
      <Wrapper align order="third">
        <Toggle>
          <IconsWrapper
            active={isTabActive}
            onClick={() => {
              setIsTabActive(true);
              props.onClick(true);
            }}
          >
            <MenuV active={isTabActive} />
          </IconsWrapper>
          <IconsWrapper
            active={!isTabActive}
            onClick={() => {
              setIsTabActive(false);
              props.onClick(false);
            }}
          >
            <MenuH active={!isTabActive} />
          </IconsWrapper>
        </Toggle>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
