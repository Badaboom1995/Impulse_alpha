import styled from "styled-components";

const fontName = "Roboto";

export const MainTitle = styled.h1`
  font-size: 18px;
  margin: 0;
  margin-bottom: 20px;
  width: 100%;
  font-weight: normal;
  font-family: ${fontName};
`;

export const SecondaryTitle = styled.h2`
  text-transform: capitalize;
  font-size: 14px;
  margin: 0;
  margin-bottom: 15px;
  width: 100%;
  font-weight: normal;
  font-family: ${fontName};
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-family: ${fontName};
  flex-grow: ${props => props.pushBottom && 1};
`;

export const ParagraphSmall = styled(Paragraph)`
  font-size: 14px;
  color: #898989;
`;
export const Label = styled.span`
  font-size: 12px;
  font-family: ${fontName};
`;
export const GoalsItem = styled.div`
  display: flex;
`;
