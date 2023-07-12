import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";

export const Login = () => {
  const {user, login} = useUser();

  useEffect(() => {
    login();
  }, [login]);

  return (
    <>
      <h1>Login</h1>
      <p>Registrate</p>
      <h2>Bienvenido, {user}</h2>
      <Link to={"/"}>Volver al home</Link>
    </>
  );
};
