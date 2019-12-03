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
  }
  thead > tr > :first-child {
    width: 33%;
    border-bottom: 1px solid blue;
    border-right: 1px solid blue;
  }
  thead > tr > :not(:first-child) {
    width: 33%;
    border-bottom: ${props =>
      props.borderColor ? `1px solid ${props.borderColor}` : null};
  }
  tbody > tr > :not(:first-child) {
    width: 33%;
    border-bottom: ${props =>
      props.borderColor ? `1px solid ${props.borderColor}` : null};
  }
  thead > tr > :last-child {
    width: 33%;
    border-bottom: 1px solid grey;
    border-left: 1px solid grey;
  }
  tbody > tr > :first-child {
    width: 33%;
    border-bottom: 1px solid blue;
    border-right: 1px solid blue;
  }
  tbody > tr > :last-child {
    width: 33%;
    border-bottom: 1px solid grey;
    border-left: 1px solid grey;
  }
`;
