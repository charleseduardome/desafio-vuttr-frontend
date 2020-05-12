import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import { Container } from './styles';

interface SignFormData {
  email: string;
  password: string;
}

interface Errors {
  [key: string]: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

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

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/tools');
      } catch (err) {
        const validationsErrors: Errors = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationsErrors[error.path] = error.message;
            toast.error(error.message);
          });
        }
        toast.error('Ocorreu um erro ao fazer login, cheque as credencias.');
      }
    },
    [history, signIn],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Login</h1>

        <Input name="email" placeholder="E-mail" />

        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>
      </Form>

      <Link to="/signup">Criar conta</Link>
    </Container>
  );
};

export default SignIn;
