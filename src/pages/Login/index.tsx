import React from "react";
import { Input } from "../../components/Input/Input";
import { ButtonDefault } from "../../components/Buttons/ButtonDefault";
import { LoginService } from "../../Services/LoginService";

export const LoginPage: React.FC = () => {
  const [form, setForm] = React.useState({ email: '', senha:'' });
  const [loginService] = React.useState(new LoginService());

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value } = evt.target;
    setForm({ ...form, [id]: value});
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(form); 
      const {email, senha} = form;
      const ret = await loginService.logar({email, senha});
      console.log(ret.data);      
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input label="Login" id="email" onChange={handleChange} value={form.email}></Input>
        <Input label="Senha" id="senha" type="password" onChange={handleChange} value={form.senha}></Input>
        <ButtonDefault type="submit" value="Logar" />
      </form>
    </>
  );
};
