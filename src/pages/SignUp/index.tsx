import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import { Container } from './styles';

interface SignFormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
        }
      }
    },
    [history],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
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
