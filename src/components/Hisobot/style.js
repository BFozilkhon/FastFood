import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 60px;
  width: ${({ baring }) => (baring ? "800px" : "400px")};
  height: ${({ baring }) => (baring ? "1000px" : "400px")};
`;

export const Flexing = styled.div`
  display: flex;
  margin-top: -500px;
  width: 600px;
`;
