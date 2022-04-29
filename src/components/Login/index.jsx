import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, ImgBaner, Box, Inputs, Btn } from "./style";
import imgbaner from "../../assets/imgs/fastfood.png";

export const Login = () => {
  const [name, setName] = useState("");
  const [parol, setParol] = useState("");
  return (
    <Container>
      <ImgBaner src={imgbaner} alt="fastfood" />
      <Box>
        <Inputs
          tepa
          chiziq
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="UserName Fozil"
          autoComplete="on"
        />
        <Inputs
          pas
          onChange={(e) => setParol(e.target.value)}
          type="password"
          placeholder="Parol 0297"
          autoComplete="on"

        />
        {name === "Fozil" && parol === "0297" ? (
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
