import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import { Container } from './styles';

interface SignFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignFormData) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      history.push('/tools');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
      }
    }
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input name="email" placeholder="E-mail" />

        <input name="password" type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
      </Form>

      <Link to="/signup">Criar conta</Link>
    </Container>
  );
};

export default SignIn;
