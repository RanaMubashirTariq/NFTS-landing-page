import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function FrameWrapperSubsection  ()  {
  const nftCards = [
    {
      id: 1,
      title: "The Salvaro",
      timer: "13 : 06 : 20",
      gameTitle: "Metaverse Game",
      edition: "1/1",
      bidLabel: "Highest bid",
      bidAmount: "Bid 2.079 ETH",
      avaterPic:'/avater-1.png',
      iconCheck:'/check.png',
      img:'/card-main-1.png',
      hasGlow: false,
    },
    {
      id: 2,
      title: "The Salvaro",
      timer: "13 : 06 : 20",
      gameTitle: "Metaverse Game",
      edition: "1/1",
      bidLabel: "Highest bid",
      bidAmount: "Bid 2.079 ETH",
      avaterPic:'/avater-2.png',
      iconCheck:'/check.png',
      img:'/card-main-2.png',
      hasGlow: false,
    },
    {
      id: 3,
      title: "The Salvaro",
      timer: "13 : 06 : 20",
      gameTitle: "Metaverse Game",
      edition: "1/1",
      bidLabel: "Highest bid",
      bidAmount: "Bid 2.079 ETH",
      avaterPic:'/avater-2.png',
      iconCheck:'/check.png',
      img:'/card-main-2.png',
      hasGlow: false,
    },
    {
      id: 4,
      title: "The Salvaro",
      timer: "13 : 06 : 20",
      gameTitle: "Metaverse Game",
      edition: "1/1",
      bidLabel: "Highest bid",
      bidAmount: "Bid 2.079 ETH",
      avaterPic:'/avater-3.png',
      iconCheck:'/check.png',
      img:'/card-main-3.png',
      hasGlow: true,
    },
    {
      id: 5,
      title: "The Salvaro",
      timer: "13 : 06 : 20",
      gameTitle: "Metaverse Game",
      edition: "1/1",
      bidLabel: "Highest bid",
      bidAmount: "Bid 2.079 ETH",
      avaterPic:'/avater-1.png',
      iconCheck:'/check.png',
      img:'/Vitual-Wolds.png',
      hasGlow: false,
    },
    {
      id: 6,
      title: "The Salvaro",
      timer: "13 : 06 : 20",
      gameTitle: "Metaverse Game",
      edition: "1/1",
      bidLabel: "Highest bid",
      bidAmount: "Bid 2.079 ETH",
       avaterPic:'/avater-1.png',
      iconCheck:'/check.png',
      img:'/card-main-6.png',
      hasGlow: false,
    },
    {
      id: 7,
      title: "The Salvaro",
      timer: "13 : 06 : 20",
      gameTitle: "Metaverse Game",
      edition: "1/1",
      bidLabel: "Highest bid",
      bidAmount: "Bid 2.079 ETH",
      avaterPic:'/avater-2.png',
      iconCheck:'/check.png',
      img:'/card-main-6.png',
      hasGlow: false,
    },
    {
      id: 8,
      title: "The Salvaro",
      timer: "13 : 06 : 20",
      gameTitle: "Metaverse Game",
      edition: "1/1",
      bidLabel: "Highest bid",
      bidAmount: "Bid 2.079 ETH",
      avaterPic:'/avater-3.png',
      iconCheck:'/check.png',
      img:'/card-main-8.png',
      hasGlow: false,
    },
  ];

  return (
    <section className="relative w-full flex flex-col gap-6 pl-[120px] py-[75px] max-[1370px]:pl-[50px] max-[767px]:pl-[25px] max-[767px]:py-[40px]">
           <img src="/circle-2.png" className="w-[193px] h-[383px] absolute -top-[260px] right-0 max-[1370px]:w-[140px] max-[1370px]:h-[300px] max-[1370px]:-top-[160px] max-[1100px]:w-[100px] max-[1100px]:h-[200px] max-[1100px]:-top-[100px] max-[560px]:-top-[50px] max-[500px]:-top-0 max-[400px]:-top-[30px] max-[560px]:w-[70px] max-[560px]:h-[150px] max-[400px]:w-[50px] max-[400px]:h-[100px]" alt="" />
           <div className="absolute w-[278px] h-[273px] top-[161px] right-[20px] rounded-[139.16px/136.73px] rotate-[177.74deg] blur-[147.75px] bg-[linear-gradient(141deg,rgba(123,164,154,0.5)_0%,rgba(21,151,119,0.5)_100%)]" />


          <div className="flex justify-between items-center max-[500px]:flex-col  max-[500px]:item-center max-[500px]:gap-5 pr-[200px] max-[1370px]:pr-[120px] max-[1000px]:pr-[60px] max-[767px]:pr-[25px]">
              <h1 className="w-[441px] font-['Exo2'] text-[37.5px] leading-[100%] tracking-[0] text-white max-[767px]:text-[28px] max-[500px]:w-full max-[500px]:text-center">Explore Categories</h1>
              <button className="rounded-[30px] cursor-pointer transform transition-transform duration-300 hover:scale-90 w-[148.98px] h-[48.98px] bg-[#d3f85a] text-[#040914]  text-base leading-[100%] font-semibold hover:bg-[#d3f85a]/90  font-['Exo2'] ">See All</button>
          </div>

      <div className="grid grid-cols-4 max-[1200px]:flex max-[1200px]:flex-wrap max-[1200px]:items-center max-[1200px]:justify-center max-[1200px]:gap-10 max-[1100px]:gap-5 max-[950px]:gap-20 max-[767px]:gap-5 max-[765px]:flex-col max-[765px]:items-center gap-6 pr-[141px] max-[1370px]:pr-[50px] max-[767px]:pr-[25px]">
        {nftCards.map((card) => (
          <div key={card.id} className="relative max-[767px]:w-full">
            <Card className=" w-[278px]  max-[765px]:w-full h-[427px] bg-[#121721cc] border-0 rounded-[9px] relative">
              <CardContent className="p-0 relative h-full">
                <img
                  className="absolute max-[765px]:w-[94%] max-[500px]:w-[90%] max-[765px]:rounded-[10px] w-60 h-[196px] top-[81px] right-[19px] max-[500px]:right-1/2 max-[500px]:translate-x-1/2 object-cover "
                  alt="Rectangle"
                  src={card.img}
                />

                <div className="absolute w-20 top-[25px] left-16 [font-family:'Exo2'] font-semibold text-white text-[13.5px] tracking-[0] leading-[15px] whitespace-nowrap">
                  {card.title}
                </div>

                <div className="absolute w-[19px] h-1 top-8 right-[18.79px]">
                  <div className="relative h-1">
                    <div className="absolute w-1 h-1 top-0 left-[15px] bg-white rounded-[1.88px]" />
                    <div className="absolute w-1 h-1 top-0 left-2 bg-white rounded-[1.88px]" />
                    <div className="absolute w-1 h-1 top-0 left-0 bg-white rounded-[1.88px]" />
                  </div>
                </div>

                <div className="absolute w-[98px] h-[30px] top-[289px] left-5 rounded-[22.5px]">
                  <div className="absolute w-[98px] h-[30px] top-0 left-0 bg-all-white rounded-[22.5px] opacity-10" />
                  <div className="absolute w-[73px] top-[7px] left-3 [font-family:'Exo2'] font-normal text-white text-[13.5px] text-center tracking-[0] leading-[normal]">
                    {card.timer}
                  </div>
                </div>

                <div className="absolute w-[39px] h-[38px] top-[15px] left-[19px]">
                  <img
                    className="absolute w-[38px] h-[38px] top-0 left-0 object-cover"
                    alt="Ellipse"
                    src={card.avaterPic}
                  />
                  <img
                    className="absolute w-[15px] h-[15px] top-[23px] left-6"
                    alt="Group"
                    src={card.iconCheck}
                  />
                </div>

                <div className="absolute w-[164px] top-[328px] left-5 [font-family:'Exo2'] font-bold text-white text-[19.5px] tracking-[0] leading-[normal]">
                  {card.gameTitle}
                </div>

                <div className="w-[21px] top-[332px] left-[190px] font-bold text-white text-[13.5px] leading-[normal] absolute [font-family:'Exo2'] tracking-[0]">
                  {card.edition}
                </div>

                <div className="absolute w-[74px] top-[352px] left-5 [font-family:'Exo2'] font-normal text-white text-[13.5px] tracking-[0] leading-[normal]">
                  {card.bidLabel}
                </div>

                <div className="absolute w-[104px] top-[382px] left-[19px] [font-family:'Exo2'] font-semibold text-[#d3f85a] text-[15px] tracking-[0] leading-[normal]">
                  {card.bidAmount}
                </div>

                <div className="absolute w-24 h-[34px] top-[374px] right-[18.75px]">
                  <Button className="w-[94px] h-[34px] bg-[#d3f85a] rounded-[37.5px] hover:bg-[#d3f85a]/90 h-auto">
                    <div className="[font-family:'Exo2'] font-semibold  cursor-pointer transform transition-transform duration-300 hover:scale-90 text-black text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      Place a Bid
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
