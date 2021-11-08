import styled from "styled-components";

const getcolor = ({ type }) => {
  switch (type) {
    case "yashil":
      return "#20D472";
    case "kok":
      return "#11ACFD";
    case "sariq":
      return " #FCB600";
    case "binafsha":
      return " #8E007E";
  }
};

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
  margin-right: 30px;
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

export const Box = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 12px;
  margin-bottom: 30px;
`;

export const Dumaloq = styled.div`
  width: 20px;
  border-radius: 50%;
  height: 20px;
  background: ${getcolor};
`;

export const Flex = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const Tortburchak = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  color: #2d3a45;
`;

export const Item = styled.div`
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.466667px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.7;
  margin-right: 20px;
`;
