import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#1a1a1a] flex-wrap min-w-[400px]">
      <div className="flex justify-center gap-20 footer-main flex-wrap">
        <div className="flex flex-col justify-start font-barlow w-[280px] gap-4 text-[1rem] text-white">
          <img src="/iteration-2/footer/logo-footer.svg" />
          <div className="gap-4 address flex justify-start">
            <img
              src="/iteration-2/footer/icons/icon-1.png"
              className="w-7 h-7 "
            />
            <p>341 London Road, Istanbuk Türkiye</p>
          </div>
          <div className="flex justify-start gap-4">
            <img
              src="/iteration-2/footer/icons/icon-2.png"
              className="w-7 h-7 "
            />
            <p>muhammedcodes@gmail.com</p>
          </div>
          <div className="flex justify-start gap-4">
            <img src="iteration-2/footer/icons/icon-3.png" />
            <p>+90 216 123 45 67</p>
          </div>
        </div>
        <div className="flex flex-col justify-start font-barlow w-[280px] gap-4 text-[1rem] text-white">
          <h2 className="font-semibold text-[1.5rem]">Hot Menu</h2>
          <div className="flex flex-col justify-center gap-2 cursor-pointer">
            <p>Terminal Pizza</p>
            <p>5 Kişipk Hackathion Pizza</p>
            <p>Tavuklu Pizzza</p>
            <p>Beyaz Frosty</p>
            <p>Mutlu Burger</p>
            <p>Acı burger</p>
          </div>
        </div>
        <div className="flex flex-col justify-start font-barlow w-[280px] gap-4 text-[1rem] text-white ">
          <h2 className="font-semibold text-[1.5rem]">Instagram</h2>
          <div className="flex justify-start items-center flex-wrap gap-4 w-[280px] md:w-[380px] py-3 ">
            <img src="/iteration-2/footer/insta/li-0.png" />
            <img src="/iteration-2/footer/insta/li-1.png" />
            <img src="/iteration-2/footer/insta/li-2.png" />
            <img src="/iteration-2/footer/insta/li-3.png" />
            <img src="/iteration-2/footer/insta/li-4.png" />
            <img src="/iteration-2/footer/insta/li-5.png" />
          </div>
        </div>
      </div>
      <div className="footer-bottom border-t text-white border-[#ffffff26] border-solid flex justify-around items-center w-full">
        <p className="text-[1rem] font-barlow">
          © created by Muhammed Zeki Yılmaz
        </p>
        <i className="fa-brands fa-twitter color-white w-[18px] h-[18px]"></i>
      </div>
    </footer>
  );
};

export default Footer;
