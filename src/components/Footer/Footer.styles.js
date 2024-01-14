import styled from 'styled-components';

export const Image = styled.img`
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;

`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 250px;
    background: var(--white);
`;

export const Content = styled.div`
    display: block;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;
`;

export const Text = styled.div`
  width: 100%;
  padding-top: 0px;
  color: var(--darkGrey);
  overflow: hidden;
  text-align: center;

  p { //year and firm
      font-size: 1.5rem;
      margin: 0 0 0 0;
      color: var(--darkGrey);
    }

`