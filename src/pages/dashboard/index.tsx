import React from 'react';

import { useAuth } from '../../context/auth';
import { Container, Button } from './styles';

const Dashboard: React.FC = () => {
  const { logOut } = useAuth();
  return (
    <Container>
      <h1>LogOut</h1>
      <Button type="submit" onClick={logOut}>
        Sair
      </Button>
    </Container>
  );
};

export default Dashboard;
