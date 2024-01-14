import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    background-size: cover;
    background-position: center;
    padding-top: 40px;
    padding-left: 50px;
    padding-right: 20px;
`;

export const Content = styled.div`
  padding-left: 20px;
  margin-bottom: 25px;
  background: rgb(0, 0, 0, 0.7);
  border-radius: 20px;
  margin-left: 90px;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
  display: block;
}

  &:hover {
    opacity: 0.8;
  }

`;


export const Text = styled.div`
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;
  padding-right: 50px;

  h1 {

  font-size: 4rem;
  margin-bottom: 25px;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
  }

  h3 {
    margin: 0 0 0 0;
    font-size: 2.5rem;
  }

`