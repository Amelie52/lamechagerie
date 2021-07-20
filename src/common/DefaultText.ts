import styled from "styled-components";

export const DefaultText = styled.div`
  margin: auto;
  font-size: ${(props) => props.theme.text.FONT_SIZE_MEDIUM};
  color: ${(props) => props.theme.colors.SECONDARY_TEXT};
`;
