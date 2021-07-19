import styled from "styled-components";

export const Container = styled.div<{ isLeft: boolean }>`
  display: flex;
  align-items: flex-end;
  align-self: ${(props) => (props.isLeft ? "flex-start" : "flex-end")};
  max-width: 85%;
  display: inline-block;
  margin-top: 1.2rem;
`;

export const MessageContent = styled.div<{ isPrivate: boolean }>`
  background-color: ${(props) =>
    props.isPrivate ? props.theme.colors.PRIMARY_TEXT : "#fff"};
  color: ${(props) =>
    props.isPrivate ? "#fff" : props.theme.colors.PRIMARY_TEXT};

  box-shadow: ${(props) => props.theme.BOX_SHADOW};

  padding: 1rem;
  border-radius: ${(props) => props.theme.RADIUS};
`;

export const Content = styled.p`
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`;

export const UserName = styled.div`
  font-size: ${(props) => props.theme.text.FONT_SIZE_XSMALL};
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.SECONDARY_TEXT};
`;

export const Hour = styled.div`
  text-align: end;
  font-size: ${(props) => props.theme.text.FONT_SIZE_XSMALL};
  margin: 0 1rem;
  color: ${(props) => props.theme.colors.SECONDARY_TEXT};
`;

export const Wrapper = styled.div<{ isLeft: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.isLeft ? "row" : "row-reverse")};
`;
