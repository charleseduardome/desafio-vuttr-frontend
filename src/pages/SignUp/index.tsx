import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import { Container } from './styles';

interface SignFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignFormData) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      history.push('/');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
      }
    }
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Cadastre-se</h1>

        <input name="name" placeholder="Nome" />

        <input name="email" placeholder="E-mail" />

        <input name="password" type="password" placeholder="Senha" />

        <button type="submit">Cadastrar</button>
      </Form>

      <Link to="/">Fazer login</Link>
    </Container>
  );
};

export default SignUp;
