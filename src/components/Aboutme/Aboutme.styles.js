import styled from 'styled-components';

export const Wrapper = styled.div`
  background-size: cover;
  background-position: center;
  padding-top: 40px;
  padding-left: 50px;
  padding-right: 50px;
`;

  export const Content = styled.div`
    display: block;
    max-width: 1280px;
    margin-bottom: 25px;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;
    margin-left: 90px;
    margin-right: 50px;

@media screen and (max-width: 768px) {
  display: grid;
  max-height: none;
}

  &:hover {
    opacity: 0.8;
  }
`;


export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  p { //year and firm
      font-size: 1.5rem;
      margin: 0 0 0 0;
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
    margin-top: 10px;
  }

  h3 {
    margin: 0 0 0 0;
    font-size: 2.5rem;
  }
`

export const Image = styled.img`

  display: flex;
  border-radius: 90px;
  height: 200px;
  margin-top: 5px;
  margin-right: 50px;
  margin-left: auto;
  float: right;
  clear: right;
  
`