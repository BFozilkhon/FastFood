import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, ImgBaner, Box, Title, Item, Inputs, Btn } from "./style";
import imgbaner from "../../assets/imgs/fastfood.png";

export const Login = () => {
  const [name, setName] = useState("");
  const [parol, setParol] = useState("");
  return (
    <Container>
      <ImgBaner src={imgbaner} alt="fastfood" />
      <Box>
        <Title>Tizimga xush kelibsiz !</Title>
        <Item>
          Tizimga kirish uchun, login va parol orqali autentifikatsiya
          jarayonidan o’ting
        </Item>
        <Inputs
          tepa
          chiziq
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <Inputs
          pas
          onChange={(e) => setParol(e.target.value)}
          type="password"
          placeholder="Parol"
        />
        {name == "fozil" && parol == "2007" ? (
          <Link to="/asosiy">
            <Btn>Tizimga kirish</Btn>
          </Link>
        ) : (
          <Btn>Tizimga kirish</Btn>
        )}
      </Box>
    </Container>
  );
};

export default Login;
