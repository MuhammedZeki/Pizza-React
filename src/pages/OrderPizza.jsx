import React, { useEffect, useState } from "react";
import Footer from "../components/home/footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { MENU_PIZZA } from "../data";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  boyut: null,
  kalinlik: null,
  malzemeler: [],
  yorum: "",
};
const MALZEMELER = [
  {
    id: "Pepperoni",
    value: "Pepperoni",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Tavuk Izgara",
    value: "Tavuk Izgara",
    type: "checkbox",
    name: "malzemeler",
  },

  {
    id: "Mısır",
    value: "Mısır",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Sarımsak",
    value: "Sarımsak",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Ananas",
    value: "Ananas",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Sosis",
    value: "Sosis",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Soğan",
    value: "Soğan",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Sucuk",
    value: "Sucuk",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Biber",
    value: "Biber",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Kabak",
    value: "Kabak",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Kanada Jambonu",
    value: "Kanada Jambonu",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Domates",
    value: "Domates",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Jalepeno",
    value: "Jalepeno",
    type: "checkbox",
    name: "malzemeler",
  },
  {
    id: "Sucuk",
    value: "Sucuk",
    type: "checkbox",
    name: "malzemeler",
  },
];
const HAMUR_SECENEKLERI = ["İnce", "Normal", "Kalın"];
const OrderPizza = () => {
  const [formData, setFormData] = useState(initialState);
  const [count, setCount] = useState(1);
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(formData);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        let newMalzemeler = [...prev.malzemeler];

        if (checked) {
          newMalzemeler.push(value);
        } else {
          newMalzemeler = newMalzemeler.filter((i) => i !== value);
        }
        return {
          ...prev,
          [name]: newMalzemeler,
        };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleCount = (num) => {
    if (num < 0) {
      if (count > 1) {
        setCount(count - 1);
      }
    } else if (num > 0) {
      setCount(count + 1);
    }
  };
  const handleApi = async () => {
    try {
      const generateId = Math.floor(Math.random() * 100);
      const res = await axios.post(
        "https://68fb675394ec96066025ec54.mockapi.io/orders/ordersPizza",
        {
          ...formData,
          name: data.title,
          customId: generateId,
          adet: count,
          toplamFiyat: totalPrice,
        }
      );
      if (res.data && res.status === 201) {
        navigate(`/success/${generateId}`);
      }
      console.log("api", res.data);
      toast.success("Sipariş başarıyla oluşturuldu!");
    } catch (error) {
      console.error("Hata:", error);
      toast.error("Bir hata oluştu, lütfen tekrar dene.");
    }
  };
  useEffect(() => {
    const fetchData = () => {
      const gelenUrun = MENU_PIZZA.find((m) => m.id === Number(id));
      if (gelenUrun) {
        setData(gelenUrun);
      } else {
        console.warn("Ürün bulunamadı:", id);
      }
    };
    fetchData();
  }, [id]);
  const malzemelerTotalPrice = formData.malzemeler.length * 5;
  const totalPrice = (data.price + malzemelerTotalPrice) * count;
  return (
    <div>
      <div className="bg-[#C20608] w-full h-[138px] flex items-center justify-center">
        <img src="/iteration-1/logo.svg" />
      </div>
      <div className="bg-[#FAF7F2]  ">
        <div
          style={{ margin: "0 auto" }}
          className="w-2/3 flex flex-col justify-center gap-4"
        >
          <div className="flex justify-center">
            <img src={data.src} className="w-[350px] " />
          </div>
          <div
            style={{ margin: "3rem auto" }}
            className="flex flex-col items-start gap-12  max-w-[530px]"
          >
            <div className="flex items-start gap-1">
              <span className="font-barlow text-[1rem] font-medium text-[#5F5F5F]">
                AnaSayfa -
              </span>
              <span className="font-barlow text-[1rem] font-medium text-[#CE2829]">
                Sipariş Oluştur
              </span>
            </div>
            <div className="flex flex-col gap-8 items-start">
              <h2 className="font-barlow font-semibold text-2xl text-[#292929]">
                {data.title}
              </h2>
              <div className="flex items-center justify-between w-full">
                <span className="font-barlow font-bold text-[1.75rem]">
                  {data.price}.00TL
                </span>
                <div className="flex items-center justify-between gap-12">
                  <span className="font-barlowtext-[1rem] font-normal text-[#5F5F5F]">
                    {data.star}
                  </span>
                  <span className="font-barlow text-[1rem] font-normal text-[#5F5F5F]">
                    (200)
                  </span>
                </div>
              </div>
              <p className="font-barlow text-[1rem] font-normal text-[#5F5F5F]">
                Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
                acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
                çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel
                olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
                oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir
                pizzaya bazen pizzetta denir.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ margin: "2rem auto", padding: "1rem 2rem" }}
        className="max-w-4xl"
      >
        <div className="flex flex-col items-start justify-around gap-10  ">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center justify-between w-full">
            <div>
              <label
                style={{ marginBottom: "1rem" }}
                className="text-gray-800 font-semibold block"
              >
                Boyut Seç<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                {["S", "M", "L"].map((boyut) => (
                  <div
                    key={boyut}
                    onClick={() =>
                      handleChange({
                        target: { name: "boyut", value: boyut, type: "radio" },
                      })
                    }
                    className={`w-12 h-12 flex items-center justify-center rounded-full text-lg cursor-pointer transition-all duration-200 ${
                      formData.boyut === boyut
                        ? "bg-amber-500 text-white shadow-md"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {boyut}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label
                style={{ marginBottom: "0.5rem" }}
                className="text-gray-800 font-semibold block "
              >
                Hamur Seç<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                {HAMUR_SECENEKLERI.map((kalinlik) => (
                  <div
                    key={kalinlik}
                    onClick={() =>
                      handleChange({
                        target: {
                          name: "kalinlik",
                          value: kalinlik,
                          type: "radio",
                        },
                      })
                    }
                    style={{ padding: "1rem 2rem" }}
                    className={`flex items-center justify-center text-sm cursor-pointer rounded-lg transition-all duration-200 ${
                      formData.kalinlik === kalinlik
                        ? "bg-amber-500 text-white shadow-md font-semibold"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {kalinlik}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold text-xl mb-1">
              Ek Malzemeler
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              En Fazla 10 malzeme seçebilirsiniz. 5₺ (En az 5, en fazla 10
              malzeme seçebilirsiniz)
            </p>
            <div
              style={{ marginTop: "1.75rem" }}
              className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6"
            >
              {MALZEMELER.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <input
                    type={item.type}
                    name={item.name}
                    id={item.id}
                    value={item.value}
                    className={` w-[45px] h-[45px] bg-[#FDC913] `}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor={item.id}
                    className="font-barlow font-bold text-[#5F5F5F]"
                  >
                    {item.value}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{ padding: "1rem 0" }}
            className="flex flex-col gap-4 border-b border-b-[#5f5f5f]"
          >
            <label
              htmlFor="Yorum"
              className="font-barlow font-semibold text-[1.25rem] text-[#292929]"
            >
              Sipariş Notu
            </label>
            <textarea
              name="yorum"
              id="Yorum"
              className="bg-[#FAF7F2] text-[#5F5F5F] text-[14px] w-full rounded-lg"
              placeholder="Siparişine eklemek istediğin bir not var mı ?"
              cols={100}
              rows={3}
              style={{ padding: "1rem " }}
              onChange={handleChange}
            ></textarea>
          </div>
          <div
            style={{ paddingTop: "1.5rem" }}
            className="w-full flex flex-col items-center gap-8 md:flex-row md:justify-around md:items-start"
          >
            <div className="flex items-center">
              <button
                style={{ padding: "1rem 2rem" }}
                onClick={() => handleCount(-1)}
                className="text-2xl font-bold bg-[#FDC913] hover:bg-yellow-500 transition duration-150 rounded-l-md text-gray-900 cursor-pointer"
              >
                -
              </button>
              <input
                type="text"
                value={count}
                readOnly
                className="w-16 h-16 text-center text-xl font-medium border border-gray-300 focus:outline-none bg-white text-gray-900"
              />
              <button
                style={{ padding: "1rem 2rem" }}
                onClick={() => handleCount(1)}
                className="cursor-pointer text-2xl font-bold bg-[#FDC913] hover:bg-yellow-500 transition duration-150 rounded-r-md text-gray-900"
              >
                +
              </button>
            </div>
            <div
              style={{ padding: "1.5rem" }}
              className="bg-[#FAF7F2]  rounded-lg w-96"
            >
              <h3
                style={{ marginBottom: "1rem" }}
                className="text-gray-800 font-barlow font-semibold text-lg "
              >
                Sipariş Toplamı
              </h3>

              <div
                style={{ marginBottom: "0.5rem" }}
                className="flex justify-between font-barlow text-gray-700"
              >
                <span>Seçimler</span>
                <span>{malzemelerTotalPrice}₺</span>
              </div>

              <div
                style={{ paddingTop: "0.5rem", marginTop: "1rem" }}
                className="flex justify-between text-xl font-bold text-[#CE2829] border-t border-t-gray-300 "
              >
                <span>Toplam</span>
                <span>{totalPrice}₺</span>
              </div>

              <button
                style={{ padding: "1rem 2rem", marginTop: "1rem" }}
                className="w-full bg-[#FDC913] text-gray-900 text-md font-bold rounded-full  hover:bg-yellow-600 transition duration-200 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={handleApi}
                disabled={
                  formData.malzemeler.length > 0
                    ? formData.malzemeler.length > 10 ||
                      formData.malzemeler.length < 5
                    : false
                }
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPizza;
