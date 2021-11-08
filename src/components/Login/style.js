import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ImgBaner = styled.img`
  flex: 3;
  height: 100vh;
`;

export const Box = styled.div`
  flex: 1;
  height: 100vh;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 38px;
  color: #2d3a45;
  font-weight: 900;
`;

export const Item = styled.div`
  font-size: 18px;
  color: #8d9ba8;
  width: 400px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const Inputs = styled.input`
  box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  /* border-radius: 6px; */
  margin: 0px;
  padding: 0px;
  border: none;
  border-bottom: ${({ chiziq }) => chiziq && "1px solid #e5e5e5"};
  outline: none;
  width: 370px;
  height: 80px;
  font-size: 20px;
  padding-left: 25px;
  border-top-left-radius: ${({ tepa }) => tepa && "6px"};
  border-top-right-radius: ${({ tepa }) => tepa && "6px"};
  border-bottom-left-radius: ${({ pas }) => pas && "6px"};
  border-bottom-right-radius: ${({ pas }) => pas && "6px"};
`;

export const Btn = styled.div`
  background: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.8;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  width: 370px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-top: 40px;
  cursor: pointer;
`;
