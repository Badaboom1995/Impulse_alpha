import styled from "styled-components";
export const LoaderWrapper = styled.div`
  display: ${props => (props.isLoading ? "block" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #0d0121;
`;
export const LoaderImage = styled.img`
  width: 700px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
