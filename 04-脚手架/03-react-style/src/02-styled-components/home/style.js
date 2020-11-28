import styled from "styled-components";

export const HomeWrapper = styled.div`
  font-size: 20px;
  color: red;

  .banner {
    background-color: blue;

    span {
      color: #fff;
      &.active {
        color: red;
      }

      &:hover {
        color: green;
      }

      &::after {
        content: "<--";
      }
    }
  }
`;

export const TitleWrapper = styled.h2`
  text-decoration: underline;
  font-size: 50px;
`;
