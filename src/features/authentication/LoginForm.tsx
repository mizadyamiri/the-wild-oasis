import { FormEvent, useState } from "react";
import { useLogin } from "./useLogin";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("mojtabaEz@felan.com");
  const [password, setPassword] = useState("RNdKM$mivWgQr6X");
  const { login, isLoading } = useLogin();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label='Email address'>
        <Input
          type='email'
          id='email'
          // This makes this form better for password managers
          autoComplete='username'
          value={email}
          disabled={isLoading}
          onChange={e => setEmail(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical label='Password'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          disabled={isLoading}
          onChange={e => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size='large' disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
