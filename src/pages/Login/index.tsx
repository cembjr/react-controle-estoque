import React, { useCallback } from "react";
import { Input } from "../../components/Input/Input";
import { ButtonDefault } from "../../components/Buttons/ButtonDefault";
import { LoginService } from "../../Services/LoginService";
import { useAuth } from "../../Context/AuthContext";

export const LoginPage: React.FC = () => {
  const [form, setForm] = React.useState({ email: "", senha: "" });
  const [loginService] = React.useState(new LoginService());

  const auth = useAuth();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const { email, senha } = form;
      const loginResponse = (await loginService.logar({ email, senha })).data;
      const { accessToken, usuarioToken } = loginResponse;

      auth.logar(usuarioToken, accessToken);
    },
    [auth, form, loginService]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Login"
          id="email"
          onChange={handleChange}
          value={form.email}
        ></Input>
        <Input
          label="Senha"
          id="senha"
          type="password"
          onChange={handleChange}
          value={form.senha}
        ></Input>
        <ButtonDefault type="submit" value="Logar" />
      </form>
    </>
  );
};
