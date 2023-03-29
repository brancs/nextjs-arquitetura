import { ReactNode } from "react";
import styled from "styled-components";

const StyledText = styled.span`
  font-family: sans-serif;
`;

type TextProps = {
  tag: "h1" | "h2" | "p" | "span";
  children: ReactNode;
};

function Text({ tag, children, ...props }: TextProps) {
  return (
    <StyledText as={tag} {...props}>
      {children}
    </StyledText>
  );
}

export default Text;
