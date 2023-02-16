import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents.jsx"
import styled from "styled-components";

export default function HomePage({ flex }) {

  const StlyedContainer = styled.div`
display: ${({ flex }) => flex ? 'flex' : ''};
`

  return (
    <StlyedContainer flex>
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
      <BoxWithClassName />
      <BoxWithClassName isBlack />
    </StlyedContainer>
  );
}
