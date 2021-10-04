import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 33px 50px;
  overflow-x: scroll;
  box-sizing: border-box;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 340px;
  /* border: 1px solid blue; */
  margin-right: 30px;
  /* height: 10; */
`;

export const Position = styled.div`
  position: absolute;
  right: 0;
  top: 0%;
  display: flex;
  width: 700px;
  height: 100vh;
  background-color: red;
`;
