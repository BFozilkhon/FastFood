import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 100px;
`;

export const Tables = styled.tr`
  box-shadow: 0px 0px 10px black;
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
  transition: 0.3s all;
  :hover {
    box-shadow: 3px 3px 15px rgb(82, 73, 73);
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

export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(141, 155, 168, 0.35895);
`;

export const Quti = styled.div`
  font-size: 25px;
  margin-left: ${({ ml }) => (ml ? "-350px" : "-170px")};
  border-left: ${({ yoq }) => !yoq && "4px solid #e5e5e5"};
  height: 50px;
  padding-left: 20px;
`;
