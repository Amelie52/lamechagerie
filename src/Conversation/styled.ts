import styled from "styled-components";

export const Header = styled.header`
  padding: 1.6rem 1rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.X_SMALL}) {
    padding: 1.2rem 1rem;
  }
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-weight: 400;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.X_SMALL}) {
    font-size: ${(props) => props.theme.text.FONT_SIZE_MEDIUM};
    font-weight: 500;
  }
`;

export const Container = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

export const MessagesContainer = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  flex-basis: 0px;
  padding: 0 1rem;
`;
export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const Heading3 = styled.h3`
  margin: 1.6rem 0 0.4rem;
  text-align: center;
  color: ${(props) => props.theme.colors.SECONDARY_TEXT};
  font-size: ${(props) => props.theme.text.FONT_SIZE_SMALL};
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 0.6rem 1rem;
  border-radius: ${(props) => props.theme.RADIUS};
  box-shadow: ${(props) => props.theme.BOX_SHADOW};
  display: flex;
  align-items: center;
`;

export const Textarea = styled.textarea<{ isRequired: boolean }>`
  flex: 1;
  border: none;
  padding: 1rem;
  resize: none;
  font-family: inherit;
  font-size: ${(props) => props.theme.text.FONT_SIZE_MEDIUM};
  color: ${(props) => props.theme.colors.PRIMARY_TEXT};

  ::placeholder {
    color: ${(props) => (props.isRequired ? "red" : "grey")};
  }

  &:focus-visible {
    outline: none;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;
