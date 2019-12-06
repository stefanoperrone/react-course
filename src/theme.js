import styled from "styled-components";

export const CustomTable = styled.table`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  border: ${props =>
    props.borderColor ? `1px solid ${props.borderColor}` : null};
  thead > tr > :hover {
    background-color: gray;
    color: white;
  }
  tbody > tr > :hover {
    background-color: yellow;
    color: red;
  }
  thead > tr > th {
    width: 33%;
    border-bottom: 1px solid blue;
    border-right: 1px solid blue;
  }
  tbody > tr > td {
    width: 33%;
    border-bottom: 1px solid blue;
    border-right: 1px solid blue;
    text-align: center;
  }
`;
