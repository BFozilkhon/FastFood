import styled from "styled-components";
// import { ReactComponent as Musor } from "../../assets/icons/musor.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding: 50px; */
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 100px;
`;

export const Tables = styled.tr`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  display: flex;
  align-items: center;
  margin: 20px;
  cursor: grab;
  width: 1400px;
  height: 80px;
  justify-content: space-between;
  padding: 0px 50px;
`;

export const Edits = styled(Edit)`
  margin-right: 10px;
  width: 50px;
`;

export const Musors = styled.img`
  width: 20px;
  cursor: pointer;
`;
