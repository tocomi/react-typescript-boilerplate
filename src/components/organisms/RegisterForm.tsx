import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { BaseButton } from '../atoms/BaseButton';
import { BaseInput } from '../atoms/BaseInput';

type FormValues = {
  email: string;
  password: string;
};

const RegisterForm: React.VFC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ mode: 'onBlur' });

  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: 'Email is required.' }}
                render={({ field }) => (
                  <StyledInput dataTestId="email" label="Email" error={!!errors.email} {...field} />
                )}
              />
              {!!errors?.email && (
                <ErrorMessage data-testid="emailErrorMessage">{errors.email.message}</ErrorMessage>
              )}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Password is required.',
                  minLength: { value: 8, message: 'Password needs 8 characters at least.' },
                }}
                render={({ field }) => (
                  <StyledInput
                    dataTestId="password"
                    label="Password"
                    type="password"
                    error={!!errors.password}
                    {...field}
                  />
                )}
              />
              {!!errors?.password && (
                <ErrorMessage data-testid="passwordErrorMessage">
                  {errors.password.message}
                </ErrorMessage>
              )}
            </Grid>
          </Grid>
          <ButtonWrapper>
            <StyledButton
              data-testid="submitButton"
              label="Register"
              type="submit"
              onClick={() => undefined}
            />
          </ButtonWrapper>
        </form>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  border: 4px solid #999;
  border-radius: 8px;
  height: 360px;
  padding: 80px 96px;
  width: 400px;
`;

const ButtonWrapper = styled.div`
  margin-top: 48px;
  text-align: center;
`;

const ErrorMessage = styled(Typography)`
  && {
    font-size: 12px;
    color: #f44336;
  }
`;

const StyledInput = styled(BaseInput)`
  width: 100%;
`;

const StyledButton = styled(BaseButton)`
  width: 240px;
`;

const memorizedRegisterForm = React.memo(RegisterForm);
export { memorizedRegisterForm as RegisterForm };
