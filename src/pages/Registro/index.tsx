import React, { useCallback } from "react";
import { Input } from "../../components/Input/Input";
import { ButtonDefault } from "../../components/Buttons/ButtonDefault";
import { LoginService } from "../../Services/LoginService";
import { useAuth } from "../../Context/AuthContext";
import { useHistory, Link } from "react-router-dom";

export const RegistroPage: React.FC = () => {
  const [form, setForm] = React.useState({
    email: "",
    senha: "",
    senhaConfirmacao: "",
  });
  const [loginService] = React.useState(new LoginService());

  const auth = useAuth();
  const history = useHistory();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const loginResponse = (await loginService.registrar(form)).data;
      const { accessToken, usuarioToken } = loginResponse;

      auth.logar(usuarioToken, accessToken);

      history.push("/");
    },
    [auth, form, loginService, history]
  );

  const cardStyle = {
    maxWidth: "380px",
    marginTop: "20px"
  };

  return (
    <>
      <section className="section-conten padding-y container" style={cardStyle}>
        <div className="card mx-auto">
          <div className="card-body">
            <h4 className="card-title mb-4">Seja bem vindo!</h4>
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

              <Input
                label="Senha Confirmação"
                id="senhaConfirmacao"
                type="password"
                onChange={handleChange}
                value={form.senhaConfirmacao}
              ></Input>

              <div className="form-group">
                <ButtonDefault type="submit" value="Registrar" />
              </div>
            </form>
          </div>         
        </div>
      </section>
    </>
  );
};
