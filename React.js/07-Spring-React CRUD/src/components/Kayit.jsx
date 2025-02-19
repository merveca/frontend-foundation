import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import KisilerServis from "../service/KisilerServis";

const Kayit = () => {
  const [kisi, setKisi] = useState({ ad: "", soyad: "", yas: "" });
  const { ad, soyad, yas } = kisi;

  const degistir = (event) => {
    const { name, value } = event.target;
    // eventtarget event in kimden geldiğini gösteriyor, ad, soyad, target olmazsa hep aynı veri gibi algılar, hangi inputtan geldiğini anlamak için
    setKisi(() => {
      return {
        ...kisi, //kisi yi ayır ad, soyad, yas diye, 
        //yani name:ad value: murat..name:soyad  value:kara ...gibi. setKisi ile bu şekilde kimin ne olduğunu belirtmezsek, form lar veri girmemize izin vermiyor,tuş basmıyor, bilemem neyin nerden geldiğini, sonuçta veritabanına kaydedeceğim, inputlar kadar kolay bişey değil diyor
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    //eğer ad, soyad, yas girildiyse kisiEkle ye git,  if (ad && soyad && yas) yazmazsak sadece ad yazıp ekle deyince , required (butonlara yazdığımız) bu alanı boş geçme dese de eksik verili kaydeder
    if (ad && soyad && yas) {
      KisilerServis.kisiEkle(kisi).then();
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-3">KAYIT SAYFASI</h1>
      <Form className="m-4">
        <Form.Group controlId="ad">
          <Form.Label>Ad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ad giriniz"
            value={ad}
            name="ad"
            required //bu alanı boş geçemezsin yazısı çıkarır
            onChange={degistir}
          />
        </Form.Group>

        <Form.Group controlId="soyad">
          <Form.Label>Soyad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Soyad giriniz"
            value={soyad}
            name="soyad"
            required
            onChange={degistir}
          />
        </Form.Group>

        <Form.Group controlId="yas">
          <Form.Label>Yaş</Form.Label>
          <Form.Control
            type="number"
            placeholder="Yaş giriniz"
            value={yas}
            name="yas"
            required
            onChange={degistir}
          />
        </Form.Group>
        <div className="mt-3 text-center">
          <Button
           style={{ width: "250px" }}
            variant="danger"
            type="submit"
            onClick={handleSubmit}
          >
            Kaydet
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Kayit;
