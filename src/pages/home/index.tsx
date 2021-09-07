import React from 'react';

import { useAuth } from '../../context/auth';
import { Container, Button } from './styles';

const Home: React.FC = () => {
  const { signIn } = useAuth();
  return (
    <Container>
      <h1>SigIn</h1>
      <Button type="submit" onClick={signIn}>
        Entrar
      </Button>
    </Container>
  );
};

export default Home;
