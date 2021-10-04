import React, { useState } from "react";
import { cardlistmock } from "../../mock/mahsulot";
import Navbar from "../Buyurtmalar/Navbar";
import { Box, Container, Edits, Musors, Tables } from "./style";
import musor from "../../assets/icons/musor.svg";

export const Maxsulot = () => {
  const [cardlist, setCardlist] = useState(cardlistmock);
  const [nuling, setNuling] = useState(null);

  const dragStartF = (e, card) => {
    setNuling(card);
  };

  const dragOverF = (e) => {
    e.preventDefault();
  };

  const dropF = (e, card) => {
    e.preventDefault();
    setCardlist(
      cardlist.map((c) => {
        if (c.id == card.id) {
          return { ...c, order: nuling.order };
        }
        if (c.id == nuling.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
    );
  };

  const SortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  const onDelete = (id) => {
    const newData = cardlist.filter((item) => item.id !== id);
    setCardlist(newData);
  };

  return (
    <Container>
      <Navbar />
      <Box>
        <table>
          {cardlist.sort(SortCards).map((value) => (
            <Tables
              key={value.id}
              onDragStart={(e) => dragStartF(e, value)}
              onDragOver={(e) => dragOverF(e)}
              onDrop={(e) => dropF(e, value)}
              draggable={true}
            >
              <td>
                <img width="50px" src={value.img} alt="" />
              </td>
              <td>{value.maxsulot}</td>
              <td>{value.kategoriya}</td>
              <td>{value.narx}</td>
              <td>{value.qoshimcha}</td>
              <td>
                <Musors src={musor} onClick={() => onDelete(value.id)} alt="" />
                <Edits />
              </td>
            </Tables>
          ))}
        </table>
      </Box>
    </Container>
  );
};

export default Maxsulot;
