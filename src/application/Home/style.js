import styled from "styled-components";
import globalStyle from "../../assets/global-style";

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${globalStyle["theme-color"]};
  span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`;
