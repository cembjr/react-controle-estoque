import React, { useCallback } from "react";
import { Input } from "../../components/Input/Input";
import { ButtonDefault } from "../../components/Buttons/ButtonDefault";
import { LoginService } from "../../Services/LoginService";
import { AuthContext } from "../../Context/AuthContext";

export const LoginPage: React.FC = () => {
  const [form, setForm] = React.useState({ email: "", senha: "" });
  const [loginService] = React.useState(new LoginService());

  const auth = React.useContext(AuthContext);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, senha } = form;
    const ret = await loginService.logar({ email, senha });
    const { accessToken, usuarioToken } = ret.data;
    console.log({ tipo: "data", data: ret.data });

    auth.logar(usuarioToken, accessToken);

    console.log(auth.getUsuarioToken());
    auth.deslogar();
    console.log("deslogando ...");
    console.log(auth.getUsuarioToken());
  },[auth, form, loginService]);

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
