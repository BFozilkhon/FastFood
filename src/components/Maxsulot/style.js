import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 30px 50px; */
`;

export const Tables = styled.tr`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  display: flex;
  align-items: center;
  width: 80%;
  margin: 20px;
  cursor: grab;
  height: 80px;
  justify-content: space-between;
  padding: 0px 50px;
  transition: 0.3s all;
  :hover {
    box-shadow: 3px 3px 15px rgb(82, 73, 73);
  }
  @media (max-width: 1300px) {
    width: 90%;
  }
`;

export const Edits = styled.img`
  margin-left: 20px;
  width: 20px;
  cursor: pointer;
`;

export const Musors = styled.img`
  width: 20px;
  cursor: pointer;
`;
