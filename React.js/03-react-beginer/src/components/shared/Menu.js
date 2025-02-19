import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="/">Ana Sayfa</Link> | <Link to="/hakkimizda">Hakkımızda</Link> |
      <Link to="/iletisim">İletişim</Link>
    </div>
  );
};

export default Menu;
