import styled from "styled-components";

export const HomeWrapper = styled.div`
  font-size: 30px;
  color: red;

  .banner {
    background-color: blue;

    span {
      color: white;

      /* 表示这两个是同级，不是父子关系 */
      &.active {
        color: orange;
      }

      &:hover {
        color: black;
      }

      &::after {
        content: "<--->";
      }
    }
  }
`;

export const TitleWrapper = styled.h2`
  text-decoration: underline;
  color: ${(props) => props.theme.themeColor};
`;
