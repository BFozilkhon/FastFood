import React, { useState } from "react";
import plus from "../../assets/icons/plus.svg";
import search from "../../assets/icons/search.svg";

import {
  Container,
  Icon,
  InputDiv,
  Plus,
  Tilte,
  Wrapper,
  Input,
} from "./style";

export const NavbarAll = (props) => {
  const [isActive, setIsActive] = useState("Yangi");
  const [isTabActive, setIsTabActive] = useState(true);
  const [isPuls, setIsPuls] = useState(false);

  const onPuls = () => {
    setIsPuls(!isPuls);
  };

  return (
    <Container>
      <Wrapper align>
        <Plus onClick={onPuls} src={plus} alt="plus" />
        <Tilte>Yangi buyurtma qoshish</Tilte>
      </Wrapper>
      <InputDiv>
        <Input placeholder="qidiruv" type="text" />
        <Icon src={search} alt="search" />
      </InputDiv>
    </Container>
  );
};

export default NavbarAll;
