const MENU_BAR = [
  {
    id: 1,
    src: "iteration-2/icons/1.svg",
    text: "YENİ! Kore",
  },
  {
    id: 2,
    src: "iteration-2/icons/2.svg",
    text: "Pizaa",
  },
  {
    id: 3,
    src: "iteration-2/icons/3.svg",
    text: "Burger",
  },
  {
    id: 4,
    src: "iteration-2/icons/4.svg",
    text: "Kızartmaklar",
  },
  {
    id: 5,
    src: "iteration-2/icons/5.svg",
    text: "Fast Food",
  },
  {
    id: 6,
    src: "iteration-2/icons/6.svg",
    text: "Gazlı İçecek",
  },
];
const MENU_BAR_V2 = [
  {
    id: 1,
    src: "iteration-2/icons/1.svg",
    text: "Ramen",
  },
  {
    id: 2,
    src: "iteration-2/icons/2.svg",
    text: "Pizaa",
  },
  {
    id: 3,
    src: "iteration-2/icons/3.svg",
    text: "Burger",
  },
  {
    id: 4,
    src: "iteration-2/icons/4.svg",
    text: "French fries",
  },
  {
    id: 5,
    src: "iteration-2/icons/5.svg",
    text: "Fast Food",
  },
  {
    id: 6,
    src: "iteration-2/icons/6.svg",
    text: "Soft drinks",
  },
];
const MENU_PİZZA = [
  {
    id: 1,
    src: "/iteration-2/pictures/food-1.png",
    title: "Terminal Pizza (200gr)",
    star: "4.9",
    price: 60,
  },
  {
    id: 2,
    src: "/iteration-2/pictures/food-2.png",
    title: "Acı Pizza (210gr)",
    star: "4.5",
    price: 70,
  },
  {
    id: 3,
    src: "/iteration-2/pictures/food-3.png",
    title: "Tavuk Burger (250gr)",
    star: "4.6",
    price: 120,
  },
];
const MainSection = () => {
  return (
    <main>
      <div className=" flex flex-col gap-4  justify-center">
        <div className="flex justify-center items-center gap-6 flex-wrap p-1">
          {MENU_BAR.map((menu, i) => (
            <div
              key={i}
              className="cursor-pointer flex justify-center items-center gap-2 mx-4 my-0"
            >
              <img src={menu.src} alt="img" />
              <p className=" font-semibold">{menu.text}</p>
            </div>
          ))}
        </div>
        <div className="gap-4 flex flex-col items-center main-content bg-[#FAF7F2]">
          <div className="main-content-items">
            <div className="flex items-center justify-center gap-2 flex-wrap ">
              <div className="gap-4 bg-[url(/iteration-2/cta/kart-1.png)] w-[531px] h-[449px] rounded-xl bg-cover bg-no-repeat flex flex-col justify-center menu">
                <span className="text-white w-[288px] font-quattrocento font-bold text-[4.25rem]">
                  Özel Lezzetus
                </span>
                <p className="text-white w-[275px] font-barlow font-semibold text-[1.3rem]">
                  Acı Burger
                </p>
                <button className=" w-[138px]   transition-all duration-500 hover:scale-x-105 bg-white border-none text-[#CE2829] radius cursor-pointer font-barlow font-semibold">
                  SİPARİŞ VER
                </button>
              </div>
              <div className="w-[530px] h-[449px] flex flex-col gap-1 justify-around items-center">
                <div className="bg-[url(/iteration-2/cta/kart-2.png)] w-[530px] h-[220px] rounded-xl bg-contain bg-no-repeat flex flex-col justify-start gap-4 p-2">
                  <p className=" text-white w-[530px] h-[220px] font-barlow font-semibold hack-text">
                    Hackathlon
                  </p>

                  <p className="text-white w-[275px] font-barlow font-semibold text-[1.3rem]">
                    Burger Menu
                  </p>
                  <button className="  transition-all duration-500 hover:scale-x-105 w-[138px] bg-white border-none text-[#CE2829] radius cursor-pointer font-barlow font-semibold">
                    SİPARİŞ VER
                  </button>
                </div>
                <div className="bg-[url(/iteration-2/cta/kart-3.png)] w-[528px] rounded-xl bg-cover bg-no-repeat flex flex-col justify-start gap-4 p-2">
                  <p className="hack-text w-[254px] text-[#292929] font-barlow font-semibold">
                    <span className="text-[#CE2829] ">Çoooook</span>
                    Hızlı npm gibi kurye
                  </p>

                  <button className="  transition-all duration-500 hover:scale-x-105 w-[138px] bg-white border-none text-[#CE2829] radius cursor-pointer font-barlow font-semibold">
                    SİPARİŞ VER
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-4 flex flex-col justify-center items-center main-content-title">
            <p className="text-[2rem] text-[#ce2829] font-satisfy">
              en çok paketlenen menüler
            </p>
            <h2 className="text-center font-barlow font-semibold text-[40px]">
              Acıktıran Kodlara Doyuran Lezettler
            </h2>
          </div>
          <div className="flex justify-center gap-4 items-center flex-wrap rounded1">
            {MENU_BAR_V2.map((item, i) => (
              <div
                key={i}
                className="rounded1 gap-2 cursor-pointer hover:bg-amber-100  transition-all duration-500 bg-white flex justify-center items-center"
              >
                <img src={item.src} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="main-content-food  flex justify-center items-center gap-4 flex-wrap">
            {MENU_PİZZA.map((item) => (
              <div
                key={item.id}
                className="w-[334px] rounded-2xl flex flex-col bg-white pz1"
              >
                <img src={item.src} className="w-[270px]" />
                <div className="gap-4 p-1 flex flex-col items-start justify-center inform">
                  <h3 className="font-barlow font-semibold text-[1.3rem]">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center w-full">
                    <span className="font-barlow font-semibold text-[1rem] text-[#1b1b1bb2]">
                      {item.star}
                    </span>
                    <span className="font-barlow  font-semibold text-[1.2rem]">
                      {item.price}₺
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
