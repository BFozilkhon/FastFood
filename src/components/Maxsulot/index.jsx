import React, { useState } from "react";
import { cardlistmock } from "../../mock/mahsulot";
import Navbar from "../Buyurtmalar/Navbar";
import { Box, Container, Edits, Musors, Tables } from "./style";
import musor from "../../assets/icons/musor.svg";
import edit from "../../assets/icons/edit.svg";

export const Maxsulot = () => {
  const [cardlist, setCardlist] = useState(cardlistmock);
  const [maxsulot2, setMaxsulot] = useState("");
  const [kategoriya2, setKategoriya] = useState("");
  const [narx2, setNarx] = useState("");
  const [qoshimcha2, setQoshimcha] = useState("");
  const [nuling, setNuling] = useState(null);
  const [selected, setSelected] = useState(null);

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
        if (c.id === card.id) {
          return { ...c, order: nuling.order };
        }
        if (c.id === nuling.id) {
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

  const onEdit = (value) => {
    setSelected(value.id);
  };

  const onEditSave = () => {
    const newArray = cardlist.map((e) =>
      e.id === selected
        ? {
            ...e,
            maxsulot: maxsulot2,
            kategoriya: kategoriya2,
            narx: narx2,
            qoshimcha: qoshimcha2,
          }
        : e
    );
    setCardlist(newArray);
    setSelected(null);
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
              <td>
                {selected === value.id ? (
                  <input
                    onChange={(e) => setMaxsulot(e.target.value)}
                    type="text"
                  />
                ) : (
                  value.maxsulot
                )}
              </td>
              <td>
                {selected === value.id ? (
                  <input
                    onChange={(e) => setKategoriya(e.target.value)}
                    type="text"
                  />
                ) : (
                  value.kategoriya
                )}
              </td>
              <td>
                {selected === value.id ? (
                  <input
                    onChange={(e) => setNarx(e.target.value)}
                    type="text"
                  />
                ) : (
                  value.narx
                )}
              </td>
              <td>
                {selected === value.id ? (
                  <input
                    onChange={(e) => setQoshimcha(e.target.value)}
                    type="text"
                  />
                ) : (
                  value.qoshimcha
                )}
              </td>
              <td>
                <Musors src={musor} onClick={() => onDelete(value.id)} alt="" />
                {selected === value.id ? (
                  <button onClick={onEditSave}>save</button>
                ) : (
                  <Edits src={edit} onClick={() => onEdit(value)} />
                )}
              </td>
            </Tables>
          ))}
        </table>
      </Box>
    </Container>
  );
};

export default Maxsulot;
