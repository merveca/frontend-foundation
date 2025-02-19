import React, { useState } from "react";
import { Button } from "react-bootstrap";

// 1. öncelikle useState import edilmeli

const State = () => {
  // 2. useState tanımlanmalı
  // sayac değişkeni, değeri saklar, setSayac ise değeri değiştiren method tur.

  const [sayac, setSayac] = useState(0);

  const artir = () => {
    setSayac(sayac + 1);
  };

  /* state yerine normal bir değişken ile yapılabilir mi?*/
  /*
  var sayac = 0;

  const artir = () => {
    sayac = sayac + 1;
    console.log(sayac);
  };
*/

  return (
    <div>
      <h1>Sayaç değeri:{sayac}</h1>
      <Button variant="info" onClick={artir}>
        Artır
      </Button>
    </div>
  );
};

export default State;
