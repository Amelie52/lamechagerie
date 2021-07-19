import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  flex: 0 0 30rem;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.BOX_SHADOW};
  margin-right: 1rem;
  border-radius: ${(props) => props.theme.RADIUS};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.SMALL}) {
    flex: 0 0 20rem;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.X_SMALL}) {
    flex: 0 0 auto;
  }
`;

export const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Title = styled.h1`
  margin: 1.6rem 1rem;
  font-weight: 400;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.X_SMALL}) {
    font-size: ${(props) => props.theme.text.FONT_SIZE_MEDIUM};
    font-weight: 500;
    margin: 1.2rem 1rem;
  }

  @media screen and (max-width: ${(props) =>
      props.theme.breakpoints.XX_SMALL}) {
    display: none;
  }
`;

export const NavigationListItem = styled.li<{ isActive: boolean }>`
  border-bottom: 1px solid ${(props) => props.theme.colors.LIGHT_GREY};
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: ${(props) =>
    props.isActive ? props.theme.colors.PRIMARY_COLOR : "transparent"};

  &:hover {
    border-left-color: ${(props) =>
      !props.isActive && props.theme.colors.LIGHT_PRIMARY_COLOR};
  }
`;

export const NavigationLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 1rem 2rem calc(1rem - 3px);
  align-items: center;
  text-decoration: none;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.X_SMALL}) {
    justify-content: center;
  }

  @media screen and (max-width: ${(props) =>
      props.theme.breakpoints.XX_SMALL}) {
    padding: 1rem 0.4rem calc(1rem - 3px);
  }
`;

export const UsersName = styled.span`
  @media screen and (max-width: ${(props) => props.theme.breakpoints.X_SMALL}) {
    display: none;
  }
`;
