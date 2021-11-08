import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 90%;
  margin: 30px 0px 0px 85px;
  background-color: red;
  height: 850px;
  border-radius: 20px;
  background-color: white;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

export const Flexing = styled.div`
  display: flex;
  background: ${({ int }) => int && "#edeff3"};
  border-radius: ${({ int }) => int && "25px"};
  width: ${({ int }) => int && "500px"};
  height: ${({ int }) => int && "70px"};
  font-size: ${({ int }) => int && "30px"};
  color: ${({ int }) => int && "#23313e"};
  margin-left: ${({ int }) => int && "50px"};
  display: ${({ int }) => int && "flex"};
  justify-content: ${({ int }) => int && "center"};
  margin-left: ${({ int }) => int && "auto"};
`;

export const Select = styled.select`
  border: none;
  outline: none;
  background: #edeff3;
  font-size: 21px;
  margin-left: 25px;
  margin-right: 25px;
  color: rgb(92, 91, 87);
`;

export const Input = styled.input`
  background: #edeff3;
  border-radius: 25px;
  width: 400px;
  height: 60px;
  font-size: 20px;
  color: rgb(92, 91, 87);
  border: none;
  outline: none;
  padding-left: 20px;
`;

export const Area = styled.textarea`
  background: #edeff3;
  border-radius: 25px;
  width: 100%;
  height: 250px;
  margin-top: 40px;
  font-size: 20px;
  color: rgb(92, 91, 87);
  border: none;
  outline: none;
  padding: 30px 0px 0px 30px;
`;

export const Box = styled.div`
  background: #edeff3;
  border-radius: 25px;
  width: 100%;
  height: 250px;
  margin-top: 40px;
  border: 5px dashed black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 35px;
  line-height: 27px;
  margin-top: 30px;
  color: #03053d;
`;

export const Btn = styled.div`
  background: ${({ green }) => (green ? "#09A92C" : "white")};
  border-radius: 30px;
  border: ${({ green }) => !green && "4px solid #EDEFF3"};
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  color: ${({ green }) => (green ? "white" : "#434343")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  cursor: pointer;
`;

export const Parent = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: 50px;
`;

export const Yukla = styled.img`
  width: 130px;
  height: 130px;
  z-index: 999;
  border-radius: 50%;
  position: absolute;
  top: 130px;
  right: 830px;
  border: 1px solid black;
  box-shadow: 0px 0px 5px black;
`;
