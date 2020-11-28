import styled from "styled-components";

export const SSInput = styled.input.attrs({
  placeholder: "SmallStars",
  borderColor: "red",
})`
  border-color: ${(props) => props.borderColor};
  color: ${(props) => props.textColor};
`;
