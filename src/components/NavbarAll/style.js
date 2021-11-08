import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 80px;
  padding: 22px 40px;
  align-items: center;
  background: white;
  width: ${({ align }) => (align ? "300px" : "100%")};
  border-left: 4px solid #e5e5e5;
  border-right: 4px solid #e5e5e5;
`;

export const Plus = styled.img`
  padding: 13px;
  background: #20d472;
  width: 45px;
  height: 45px;
  min-width: 45px;
  min-height: 45px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 14px;
`;

export const Tilte = styled.div`
  font-family: SFProDisplay bold;
  font-size: 18px;
  line-height: 20px;
  color: #2d3a45;
`;

export const InputDiv = styled.div`
  width: 400px;
  height: 60px;
  border-radius: 30px;
  background: #edeff3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 50px;
  margin-top: 10px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  height: 35px;
  font-size: 20px;
  margin-left: 20px;
  width: 250px;
  background: #edeff3;
`;

export const Icon = styled.img`
  width: 27px;
`;
