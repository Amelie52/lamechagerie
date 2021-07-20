import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 2rem;
  z-index: 20;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.BOX_SHADOW};
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.text.FONT_SIZE_MEDIUM};
  color: ${(props) => props.theme.colors.PRIMARY_COLOR};
  font-weight: 500;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.text.FONT_SIZE_SMALL};
  color: ${(props) => props.theme.colors.PRIMARY_TEXT};
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  margin: 1rem;
`;

export const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;
