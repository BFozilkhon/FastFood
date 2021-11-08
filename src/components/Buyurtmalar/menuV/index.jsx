import React from "react";
import {
  Box,
  Container,
  Dumaloq,
  Flex,
  Item,
  Position,
  Tortburchak,
  Wrapper,
} from "./style";
import ProductCard from "../../ProductCard";

import { BuyurtmaContext } from "../../../context/Buyurtmalar/buyurtmalar";

export const Body = () => {
  const [card] = BuyurtmaContext();
  console.log(card, "card");
  return (
    <Container>
      <Wrapper>
        <Flex>
          <Item>Yangi</Item>
          <Tortburchak>{card.yangi.length}</Tortburchak>
        </Flex>
        <Box>
          <Dumaloq type="yashil"></Dumaloq>

          <h2>12,300,000 UZS</h2>
        </Box>
        {card.yangi.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        <Flex>
          <Item>Qabul qilingan</Item>
          <Tortburchak>{card.qabul.length}</Tortburchak>
        </Flex>
        <Box>
          <Dumaloq type="kok"></Dumaloq>

          <h2>20,343,000,0 UZS</h2>
        </Box>
        {card.qabul.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        <Flex>
          <Item>Jo`natilgan</Item>
          <Tortburchak>{card.jonatilgan.length}</Tortburchak>
        </Flex>
        <Box>
          <Dumaloq type="sariq"></Dumaloq>

          <h2>20,000,000 UZS</h2>
        </Box>
        {card.jonatilgan.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
      <Wrapper>
        <Flex>
          <Item>Yopilgan</Item>
          <Tortburchak>{card.yopilgan.length}</Tortburchak>
        </Flex>
        <Box>
          <Dumaloq type="binafsha"></Dumaloq>

          <h2>12,234,500,0 UZS</h2>
        </Box>
        {card.yopilgan.map((value) => (
          <ProductCard key={value.id} value={value} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Body;
