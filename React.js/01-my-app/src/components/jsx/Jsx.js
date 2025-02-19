const Jsx = () => {
  const kullanici = {
    ad: "ziya",
    soyad: "sari",
    email: "ziya@sari.com",
    telefon: "55555555",
  };

  return (
    <div>
      <div>Merhaba {kullanici.ad + " " + kullanici.soyad}</div>
      <div>Eposta: {kullanici.email}</div>
    </div>
  );
};

export default Jsx;
