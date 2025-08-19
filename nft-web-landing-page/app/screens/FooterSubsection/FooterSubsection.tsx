import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function FooterSubsection  ()  {
  const communityLinks = ["About", "Blog", "RARI Token", "Suggest Features"];

  const appStoreData = [
    {
      icon:'/playstore.png',
      rating: "4.5/5",
      className: "left-[902px]",
      logoWidth: "w-[26px]",
      logoLeft: "left-[19px]",
    },
    {
      rating: "4.7/5",
      className: "left-[1022px]",
      logoWidth: "w-[51px]",
      logoLeft: "left-1.5",
    },
  ];

  return (
    <footer className="relative w-full h-[599px] max-[700px]:h-[800px] max-[530px]:h-[1080px] bg-[#040914]">
      <div className="relative w-full h-[599px]">
        {/* Background decorative elements */}
        <div className="absolute w-[278px] h-[273px] top-[5px] left-[1157px] rounded-[139.16px/136.73px] rotate-[177.74deg] blur-[147.75px] bg-[linear-gradient(141deg,rgba(123,164,154,0.5)_0%,rgba(21,151,119,0.5)_100%)]" />
        <div className="absolute w-[278px] h-[273px] top-[284px] left-[232px] rounded-[139.16px/136.73px] rotate-[177.74deg] blur-[147.75px] bg-[linear-gradient(141deg,rgba(123,164,154,0.5)_0%,rgba(21,151,119,0.5)_100%)]" />

        {/* Top curved background */}
        <img
          className="absolute w-[1440px] h-[260px] top-[11px] left-0 max-[530px]:h-[387px]"
          alt="Vector"
          src="/bg-footer.png"
        />

        {/* Download app section */}
        <div className="absolute top-[95px] max-[530px]:text-center left-[553px] max-[1100px]:left-[400px] max-[1300px]:left-[450px] max-[1000px]:left-[300px] max-[880px]:left-[25px] [font-family:'roboto'] font-normal text-white text-[27.8px] tracking-[0] leading-[33px] max-[530px]:left-1/2 max-[530px]:-translate-x-1/2">
          <span className="font-semibold font-['roboto'] text-white">
            Download <br />
          </span>
          <span className="text-white font-['roboto'] text-[25.5px]">Our Mobile App</span>
        </div>

        {/* App store cards */}
               
               <div className=" relative max-[530px]:ml-[130px] max-[400px]:ml-[150px] ">
                  <button className="max-[530px]:mr-[30px] absolute top-[143px] max-[530px]:top-[270px] max-[530px]:right-1/2 max-[530px]:-translate-x-1/2  right-[333px] max-[1100px]:right-[50px] max-[1300px]:right-[170px] max-[1000px]:right-[25px]  max-[880px]:right-[25px] border-none outline-none bg-transparent w-[105px] h-[127.5px]  bg-white flex flex-col item-center rounded-t-[60px]  gap-[14.5px]">
                            <img src="/a-img.png" className="w-[25px h-[27px] object-contain mt-[32.25px]" alt="" />
                             <img src="remain-1.png" className="w-[63.9px] h-[9.36px] object-contain ml-5" alt="" />
                             <span className="font-['Exo2'] text-[12px] font-extrabold leading-[11.5px] text-black">24/5</span>
                   </button>
                                   <button className=" absolute top-[143px] max-[530px]:top-[270px] max-[530px]:right-1/4 max-[530px]:-translate-x-1/4 right-[453px] max-[1100px]:right-[50px] max-[1300px]:right-[283px] max-[1100px]:right-[200px] max-[880px]:right-[150px] max-[367px]:right-1/5 max-[367px]:-translate-x-1/5 border-none outline-none bg-transparent w-[105px] h-[127.5px]  bg-white flex flex-col item-center rounded-t-[60px]  gap-[14.5px]">
                            <img src="/playstore.png" className="w-[25px h-[27px] object-contain mt-[32.25px]" alt="" />
                             <img src="remain-1.png" className="w-[63.9px] h-[9.36px] object-contain ml-5" alt="" />
                             <span className="font-['Exo2'] text-[12px] font-extrabold leading-[11.5px] text-black">24/5</span>
                   </button>
                                        </div>
             

        {/* Download buttons */}
        <img
          className="absolute w-[236px] h-10 top-48 left-[553px] max-[1100px]:left-[400px] max-[1300px]:left-[450px] max-[1000px]:left-[300px] max-[880px]:left-[25px] max-[530px]:left-1/2 max-[530px]:-translate-x-1/2"
          alt="Download buttons"
          src="/download-avater.png"
        />

        {/* QR Code section */}
        <img
          className="absolute w-[212px] h-[261px] top-[9px] left-[277px] max-[1300px]:left-[80px] max-[1100px]:left-[50px] max-[1000px]:left-[25px] max-[880px]:hidden"
          alt="QR background"
          src="/empty-border.png"
        />

        <Card className="absolute w-[153px] h-[151px] top-[41px] left-[307px] bg-white rounded-[9px] border-0 max-[1300px]:left-[110px] max-[1100px]:left-[80px] max-[1000px]:left-[55px] max-[880px]:hidden">
          <CardContent className="p-0 relative w-full h-full">
            <img
              className="absolute w-[117px] h-[117px] top-[18px] left-[18px]"
              alt="QR Code"
              src='/QrCode.png'
            />
          </CardContent>
        </Card>

        <div className="absolute top-[214px] left-[333px] [font-family:'Exo2'] font-semibold text-white text-[19.5px] text-center tracking-[0] leading-[normal] whitespace-nowrap max-[1300px]:left-[130px] max-[1100px]:left-[100px] max-[1000px]:left-[75px] max-[880px]:hidden">
          Scane Here
        </div>

        {/* Dark background section */}
        <div className="absolute w-[1440px] h-[328px] top-[271px] left-0 bg-dark-background" />

        {/* NFTs logo and branding */}
        <div className="absolute w-[152px] h-[52px] max-[700px]:h-10 top-[317px]  max-[530px]:top-[450px] left-[279px] max-[1300px]:left-[80px] max-[1100px]:left-[50px] max-[1000px]:left-[25px] max-[700px]:left-1/2 max-[700px]:-translate-x-1/2">
          <div className="relative w-[154px] h-[52px]">
            <img
              className="w-full h-full object-cover"
              alt="NFTs logo"
              src='/logo.png'
            />
          </div>
        </div>

        {/* Community sections */}

        <div className="absolute w-full max-[767px]:text-center top-[404px] max-[530px]:top-[510px]  left-[279px] [font-family:'Exo2'] font-semibold text-white text-lg tracking-[0] leading-[normal] max-[1300px]:left-[80px] max-[1100px]:left-[50px] max-[1000px]:left-[25px] max-[700px]:left-1/2 max-[700px]:-translate-x-1/2">
          Join NFTs Community
        </div>

        {/* Community navigation sections */}
        <div className="absolute top-[323px] max-[530px]:top-[630px]  right-[641px] max-[1100px]:right-[50px] max-[1300px]:right-[420px] max-[1100px]:right-[365px]  max-[880px]:right-[270px] max-[700px]:top-[530px]  max-[880px]:mr-[25px] max-[530px]:mr-0 max-[700px]:right-1/2 max-[700px]:-translate-x-1/2  max-[530px]:right-1/2 max-[530px]:translate-x-1/2 [font-family:'Exo2'] font-semibold text-white text-[18.8px] max-[530px]:text-center tracking-[0] leading-[21.8px] whitespace-nowrap">
          Community
        </div>

        <div className="absolute top-[323px] max-[530px]:top-[830px] right-[351px] max-[1100px]:right-[50px] max-[1300px]:right-[200px] max-[1000px]:right-[25px]  max-[880px]:right-[40px] max-[700px]:top-[530px]  max-[700px]:right-1/5 max-[700px]:-translate-x-1/5 max-[560px]:right-1/7 max-[560px]:-translate-x-1/7 max-[560px]:mr-[20px] max-[530px]:mr-0 max-[700px]:mr-[25px]  max-[530px]:right-1/2 max-[530px]:translate-x-1/2  max-[530px]:text-center  [font-family:'Exo2'] font-semibold text-white text-[18.8px] tracking-[0] leading-[21.8px] whitespace-nowrap">
          Community
        </div>

        <nav className="absolute top-[359px] cursor-pointer max-[530px]:top-[670px] right-[333px] max-[1100px]:right-[50px] max-[1300px]:right-[180px] max-[1000px]:right-[25px]  max-[880px]:right-[25px] max-[700px]:top-[560px] max-[700px]:right-1/2 max-[700px]:-translate-x-1/2   max-[530px]:right-1/2 max-[530px]:translate-x-1/2  [font-family:'Exo2'] font-normal text-white text-[15px] tracking-[0] leading-9 max-[530px]:text-center">
          {communityLinks.map((link, index) => (
            <div key={`community-1-${index}`}>
              {link}
              {index < communityLinks.length - 1 && <br />}
            </div>
          ))}
        </nav>

        <nav className="absolute top-[359px] cursor-pointer max-[530px]:top-[870px] right-[622px] max-[1100px]:right-[50px] max-[1300px]:right-[400px] max-[1100px]:right-[350px]  max-[880px]:right-[250px] max-[700px]:top-[560px] max-[700px]:right-1/5 max-[700px]:-translate-x-1/5 max-[560px]:right-1/7 max-[560px]:-translate-x-1/7  max-[530px]:right-1/2 max-[530px]:translate-x-1/2    [font-family:'Exo2'] max-[530px]:text-center font-normal text-white text-[15px] tracking-[0] leading-9">
          {communityLinks.map((link, index) => (
            <div key={`community-2-${index}`}>
              {link}
              {index < communityLinks.length - 1 && <br />}
            </div>
          ))}
        </nav> 

        {/* Social media icons */}

        <div   className="flex items-center justify-between  absolute w-[341px] max-[880px]:w-[280px] max-[500px]:w-[240px] h-14 max-[880px]:h-10 top-[442px] max-[530px]:top-[550px]  left-[279px] max-[1300px]:left-[80px] max-[1100px]:left-[50px] max-[1000px]:left-[25px] max-[700px]:left-1/2 max-[700px]:-translate-x-1/2">
              
              <div className="bg-[url('/icon-bg.png')] bg-center w-[56px] h-[56px] max-[880px]:w-10 max-[880px]:h-10 rounded-[15px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-90"><img src="/google_1.png" className="w-[30px] h-[30px] max-[880px]:w-5 max-[880px]:h-5" alt="" /></div>
              <div className="bg-[url('/icon-bg.png')] bg-center w-[56px] h-[56px] max-[880px]:w-10 max-[880px]:h-10 rounded-[15px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-90"><img src="/twitter_1.png" className="w-[30px] h-[30px] max-[880px]:w-5 max-[880px]:h-5" alt="" /></div>
               <div className="bg-[url('/icon-bg.png')] bg-center w-[56px] h-[56px] max-[880px]:w-10 max-[880px]:h-10 rounded-[15px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-90"><img src="/insta-1.png" className="w-[30px] h-[30px] max-[880px]:w-5 max-[880px]:h-5" alt="" /></div>
              <div className="bg-[url('/icon-bg.png')] bg-center w-[56px] h-[56px] max-[880px]:w-10 max-[880px]:h-10 rounded-[15px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-90"><img src="/linked_1.png" className="w-[30px] h-[30px] max-[880px]:w-5 max-[880px]:h-5" alt="" /></div> 
               <div className="bg-[url('/icon-bg.png')] bg-center w-[56px] h-[56px] max-[880px]:w-10 max-[880px]:h-10 rounded-[15px] flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-90"><img src="/youtube_1.png"  className="w-[30px] h-[30px] max-[880px]:w-5 max-[880px]:h-5"alt="" /></div>
        </div>

        {/* Copyright section */}
        <div className="absolute w-[1442px] h-[38px] bg-[#d3f85a] top-[560px] max-[530px]:top-[1040px] left-1/2 -translate-x-1/2 max-[700px]:top-[760px]">
          <div className="relative w-[1440px] h-[38px] bg-nft-primary-color">
            <div className="absolute top-2.5 left-[614px] [font-family:'Exo2'] font-medium text-black text-[13.5px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              © 2022 NFTs @ All Rights Reserved
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};
