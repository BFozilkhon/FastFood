import React, { useState } from "react";
import { card } from "../../../mock/card";
import cancel from "../../../assets/icons/cancel.svg";
import done from "../../../assets/icons/done.svg";
import {
  BatareyIcon,
  Box,
  Btn,
  Circle,
  ClockIcon,
  Container,
  Flexing,
  Item,
  Payme,
  PhoneIcon,
  SaveIcon,
  Title,
  TruckIcon,
  UserIcon,
  Wrapper,
  Text,
  ImgBox,
  Img,
} from "./style";

export const Body = () => {
  const [card2, setCard2] = useState(card.yangi);

  const onDelete = (id) => {
    const newDatas = card2.filter((value) => value.id !== id);
    setCard2(newDatas);
  };

  return (
    <Container>
      {card2.map((value) => {
        return (
          <Wrapper>
            <Box>
              <Flexing>
                <Btn>{value.orderId}</Btn>
                <Circle>
                  <SaveIcon />
                </Circle>
              </Flexing>
              <Flexing bottom>
                <ClockIcon />
                <Title>12:40</Title>
              </Flexing>
            </Box>
            <Box margin>
              <Flexing>
                <UserIcon />
                <Title>
                  <strong>{value.user.name}</strong>
                </Title>
              </Flexing>
              <Flexing bottom>
                <PhoneIcon />
                <p>{value.user.phone}</p>
              </Flexing>
            </Box>
            <Box margin>
              <Flexing top>
                <BatareyIcon />
                <Item>{value.batarey} UZS</Item>
                <Payme></Payme>
                <Item>Payme</Item>
              </Flexing>
              <Flexing>
                <TruckIcon />
                <Item>{value.truck} UZS</Item>
              </Flexing>
              <Item toping summa>
                Umumiy summa
              </Item>
              <Title top>
                <strong>{value.total}</strong>UZS
              </Title>
            </Box>
            <Box reletiving yoq>
              <Item summa>Operator:</Item>
              <Text>{value.operator.name}</Text>
              <Item toping summa>
                Filiali:
              </Item>
              <Text>{value.filial.title}</Text>
              <Text>{value.filial.location}</Text>
              <ImgBox tepa onClick={() => onDelete(value.id)}>
                <Img src={cancel} alt="cencel" />
              </ImgBox>
              <ImgBox>
                <Img src={done} alt="done" />
              </ImgBox>
            </Box>
          </Wrapper>
        );
      })}
    </Container>
  );
};

export default Body;
