import styled from "styled-components";

export const Avatar = styled.img`
  border-radius: 50%;
  height: 3.2rem;
  width: 3.2rem;
  object-fit: cover;
  margin-left: 1.6rem;

  @media screen and (max-width: ${(props) =>
      props.theme.breakpoints.XX_SMALL}) {
    height: 3.4rem;
    width: 3.4rem;
  }
`;

export const AvatarGroup = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  margin-right: 0.8rem;
`;

export const AvatarGroupItem = styled.span`
  height: 4rem;
  position: relative;
  border: 2px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  width: 4rem;

  &:not(:last-child) {
    margin-left: -2rem;
  }

  @media screen and (max-width: ${(props) =>
      props.theme.breakpoints.XX_SMALL}) {
    height: 3.4rem;
    width: 3.4rem;
  }
`;

export const AvatarGroupItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
