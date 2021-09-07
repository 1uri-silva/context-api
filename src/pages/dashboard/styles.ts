import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  border-radius: 0.5rem;
  justify-content: center;
  padding: 0.5rem;
  background: #ffffff;
  border: none;
  height: 2.5rem;
  width: 5.3rem;
  margin-left: 1rem;

  :hover {
    background: blueviolet;
    color: #ffffff;
    opacity: 0.3;
  }
`;
