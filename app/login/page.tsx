'use client';

import { useActionState, useState, useEffect } from 'react';
import { authenticate } from '../utils/actions';
import { Container, Form, InputWrapper, ButtonWrapper, Wrapper, Logo, Toast, ErrorInput } from './style';
import Input from '../globalStyles/input';
import DefaultButton from '../globalStyles/buttons/default';
import LogoSvg from "../../public/logo.svg"

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <Container>
    <Form action={formAction}>
        <Logo src={LogoSvg} alt="logo" />
      <Wrapper>
    <InputWrapper>
      <Input
        id="email"
        type="email"
        name="email"
        label="Email"
        required
      />
      <Input
        id="password"
        type="password"
        name="password"
        label="Password"
        required
      />
        </InputWrapper>
        <ButtonWrapper>
            <DefaultButton style='outlined'>
              REGISTER
            </DefaultButton>
            <DefaultButton style='default' aria-disabled={isPending}>
              LOGIN
            </DefaultButton>
        </ButtonWrapper>
            </Wrapper>
        </Form>
          {errorMessage && (
            <>
              <Toast>{errorMessage}</Toast>
            </>
          )}
    </Container>
  );
}
