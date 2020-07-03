import styled from 'styled-components';

const Card = styled.main`
  margin: 10em auto;
  width: 45vw;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 5px;
  width: 30vw;
  border: 1px solid #999;
  // margin-bottom: 1rem;
  font-size: 1rem;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border-color: #3f4eae;
  border-radius: 5px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 30vw;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1rem;
`;

const Error = styled.div`
  background-color: red;
`;

export { Form, Input, Button, Card, Error };