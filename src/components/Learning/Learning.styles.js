import styled from 'styled-components';

export const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  padding-top: 40px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Content = styled.div`
max-width: 1280px;
margin-bottom: 25px;
margin-left: 90px;
background: rgb(0, 0, 0, 0.7);
border-radius: 20px;
display: grid;

@media screen and (max-width: 768px) {
  display: grid;
  max-height: none;
}
`;


export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  p { //year and firm
      font-size: 2rem;
      margin-top: 20px;
      border-bottom: 2px solid var(--darkGrey);

      &:hover{
        opacity: 0.6;
      }
    }


  h1 {

    font-size: 4rem;
    margin-bottom: 25px;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }

  h2 { //title experience...
    text-transform: uppercase;
    font-size: 3rem;
    margin-top: 100px;
  }

`