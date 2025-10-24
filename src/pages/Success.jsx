import React, { useEffect, useState } from "react";
import Footer from "../components/home/footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const { id: _id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://68fb675394ec96066025ec54.mockapi.io/orders/ordersPizza"
        );
        const orders = response.data;
        console.log(orders);
        const foundOrder = orders.find(
          (order) => order.customId === Number(_id)
        );

        if (foundOrder) {
          setData(foundOrder);
        } else {
          console.log("Sipariş bulunamadı");
          return null;
        }
      } catch (error) {
        console.error("Hata:", error);
        return null;
      }
    };
    fetchData();
  }, [_id]);
  console.log(data);
  return (
    <>
      <div
        style={{ padding: "2rem 0" }}
        className="bg-[#CE2829]  md:h-screen flex flex-col  items-center justify-start"
      >
        <div style={{ margin: "3rem 0" }}>
          <img
            style={{ paddingTop: "4rem 0 0 0" }}
            src="/iteration-1/logo.svg"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-1 gap-4 border-b border-b-white">
          <span className="font-satisfy text-[#FDC913]  text-[2rem]">
            Lezzetler yolda
          </span>
          <p className="font-roboto-condensed text-center font-light text-white tracking-wide text-[5.3rem]">
            SİPARİŞ ALINDI
          </p>
        </div>
        <div
          style={{ padding: "1rem 0 0 0" }}
          className="flex flex-col items-center justify-center gap-4 text-white"
        >
          <h2 className="text-2xl font-barlow font-semibold">{data.name}</h2>
          <div className="flex gap-4 items-center justify-between ">
            <span className="font-barlow font-semibold text-[1.25rem]">
              Boyut: {data.boyut}
            </span>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <span className="font-barlow font-semibold text-[1.25rem]">
              Hamur : {data.kalinlik}
            </span>
          </div>
          <div className="flex text-center  gap-4 items-center justify-between">
            <span className="font-barlow font-semibold text-[1.25rem]">
              Ek Malzemeler : {data.malzemeler && data.malzemeler.join(", ")}
            </span>
          </div>
        </div>
        <div
          style={{ margin: "2rem 0 0 0", padding: "2rem 5rem" }}
          className="border  flex flex-col items-start justify-start border-white rounded-sm text-white"
        >
          <h2 className="font-barlow font-semibold text-[1.25rem]">
            Sipariş Toplamı
          </h2>
          <div>
            <div
              style={{ padding: "1rem 0" }}
              className="w flex items-center justify-between font-barlow font-semibold text-[1.125rem]"
            >
              <p className="w-3/4">Seçimler</p>
              <p className="w-1/3">
                {data.malzemeler && data.malzemeler.length * 5}.00TL
              </p>
            </div>
            <div
              style={{ padding: "1rem 0" }}
              className="w flex items-center justify-between font-barlow font-semibold text-[1.125rem]"
            >
              <p className="w-3/4">Toplam</p>
              <p className="w-1/3">{data.toplamFiyat}.00TL</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Success;
