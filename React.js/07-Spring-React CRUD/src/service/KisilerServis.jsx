import axiosInstance from "./AxiosInstance";

const kisiEkle = (kisi) => {
  return axiosInstance.post("/ekle", kisi);
};//ekle=post işlemi. localhost a veri girince, o veri buraya gelir, eclipse deki ekle metoduyla kaydolur
//bu yüzden path leri eşleşmeli match olmalı aynı olmalı, ama metod adları farklı olabilir
const tumKisileriGetirr= () => {
  return axiosInstance.get("/");
};

const idIleKisiSil = (id) => {
  return axiosInstance.delete(`/sil/${id}`);
};

const idIleKisiGetir = (id) => {
  return axiosInstance.get(`/ara/${id}`);
};

//Patch işlemi
const idIleKisiGuncelle = (id, kisi) => {
  return axiosInstance.patch(`/yenile/${id}`, kisi);
};

const KisilerServis = {// toplu bir şekilde export etmek için metodları değişkene atadık, o değişkeni export ettik
  kisiEkle,
  tumKisileriGetirr,
  idIleKisiSil,
  idIleKisiGetir,
  idIleKisiGuncelle,
};

export default KisilerServis;
