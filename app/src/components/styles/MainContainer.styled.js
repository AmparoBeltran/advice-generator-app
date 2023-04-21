import styled from "styled-components";

export const MainContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGrayishBlue};
  border-radius: 20px;
  padding: 2em 2em 3em;
  gap: 1em;
  margin: 0 10px;
  max-width: 400px;
  text-align: center;
  position: relative;

  h6 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.neonGreen};
  }

  button {
    border: none;
    cursor: pointer;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.neonGreen};
    padding: 1.5em;
    position: absolute;
    bottom: -34px;

    :hover {
      box-shadow: 0px 8px 16px 0px ${({ theme }) => theme.colors.neonGreen};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1em 1em 2em;
    & > img {
      width: calc(100vw - 20px - 2em);
    }
  }
`;
