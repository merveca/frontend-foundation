import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { StoreContext } from "../store";
const HomePage = () => {
  const context = useContext(StoreContext);
  const { isUserLogin, user, setUser } = context;
  const logout = () => {
    setUser({});
  };
  return (
    <div className="text-center mt-5">
      <h1>Hoşgeldin {user.firstname}</h1>
      {isUserLogin() ? (
        <Button variant="danger" onClick={logout}>
          Çıkış Yap
        </Button>
      ) : (
        <Button variant="success" as={Link} to="/login">
          Giriş Yap
        </Button>
      )}
    </div>
  );
};
export default HomePage;
