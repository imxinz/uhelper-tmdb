import styled from "styled-components";

export const SearchTabWrapper = styled.div`
  width: 50%;
  height: 4.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0rem auto 3rem;
  border: 4px solid rgb(221, 221, 221);
  background: rgb(221, 221, 221);
  border-radius: 14px;
  box-shadow: 0px 4px 5px 0px hsla(0, 0%, 0%, 0.14),
    0px 1px 10px 0px hsla(0, 0%, 0%, 0.12),
    0px 2px 4px -1px hsla(0, 0%, 0%, 0.2);
  position: relative;

  ${(props) =>
    `& div:nth-child(2) {
    ${props.tabState === "movies" ? `color: white;` : `color: black;`}
  }

  & div:nth-child(3) {
    ${props.tabState === "tv" ? `color: white;` : `color: black;`}
  }

  & div:nth-child(4) {
    ${props.tabState === "keywords" ? `color: white;` : `color: black;`}
  }

`}
`;

export const SearchTabSlider = styled.div`
  position: absolute;
  width: 33.33%;
  height: 4rem;
  background: black;
  ${(props) =>
    props.tabState === "movies"
      ? `transform: translateX(0%);`
      : props.tabState === "tv"
      ? `transform: translateX(100%);`
      : props.tabState === "keywords"
      ? `transform: translateX(200%);`
      : null}
  border-radius: 12px;
  z-index: 4;
  transition: transform 0.325s cubic-bezier(0.77, 0, 0.18, 1);
`;

export const SearchTabSelectionTitle = styled.div`
  padding: 1rem;
  display: grid;
  place-items: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  z-index: 5;
  transition: color 0.325s cubic-bezier(0.77, 0, 0.18, 1);
`;

export const Keyword = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  transition: color 0.3s ease-in;

  &:hover {
    color: white;
    cursor: pointer;
  }
`;
