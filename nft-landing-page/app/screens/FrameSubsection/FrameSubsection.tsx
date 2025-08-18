import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function FrameSubsection  ()  {
  const nftCards = [
    {
      name: "Kristin Watson",
      rating: "(24)",
      mainImage: "/main-card-1.png",
      topRightImage: "/right-top-card-1.png",
      bottomRightImage: "/right-bottom-card-1.png",
      ratingStars: "/star-icons.png",
      avatar: "/avater-card-1.png",
    },
    {
      name: "Kristin Watson",
      rating: "(24)",
      mainImage: "/main-card-2.png",
      topRightImage: "/right-top-card-2.png",
      bottomRightImage: "/right-bottom-card-2.png",
      ratingStars: "/star-icons.png",
      avatar: "/avater-card-2.png",
    },
    {
      name: "Kristin Watson",
      rating: "(24)",
      mainImage: "/main-card-3.png",
      topRightImage: "/right-top-card-3.png",
      bottomRightImage: "/right-bottom-card-3.png",
      ratingStars: "/star-icons.png",
      avatar: "/avater-card-3.png",
    },
    {
      name: "Kristin Watson",
      rating: "(24)",
      mainImage: "/main-card-4.png",
      topRightImage: "/right-top-card-4.png",
      bottomRightImage: "/right-bottom-card-4.png",
      ratingStars: "/star-icons.png",
      avatar: "/avater-card-4.png",
    },
    {
      name: "Kristin Watson",
      rating: "(24)",
      mainImage: "/main-card-4.png",
      topRightImage: "/right-top-card-4.png",
      bottomRightImage: "/right-bottom-card-4.png",
      ratingStars: "/star-icons.png",
      avatar: "/avater-card-4.png",
    },
    {
      name: "Kristin Watson",
      rating: "(24)",
      mainImage: "/main-card-6.png",
      topRightImage: "/right-top-card-6.png",
      bottomRightImage: "/right-bottom-card-6.png",
      ratingStars: "/star-icons.png",
      avatar: "/avater-card-6.png",
    },
    {
      name: "Kristin Watson",
      rating: "(24)",
      mainImage: "/main-card-7.png",
      topRightImage: "/right-top-card-7.png",
      bottomRightImage: "/right-bottom-card-7.png",
      ratingStars: "/star-icons.png",
      avatar: "/avater-card-7.png",
    },
    {
      name: "Kristin Watson",
      rating: "(24)",
      mainImage: "/main-card-8.png",
      topRightImage: "/right-top-card-8.png",
      bottomRightImage: "/right-bottom-card-8.png",
      ratingStars: "/star-icons.png",
      avatar: "/avater-card-8.png",
    },
    {
      name: "Kristin Watson",
      rating: "(24)",
      mainImage: "/main-card-9.png",
      topRightImage: "/right-top-card-9.png",
      bottomRightImage: "/right-bottom-card-9.png",
      ratingStars: "/star-icons.png",
      avatar: "/avater-card-9.png",
    },
    {
      name: "Kristin Watson",
      rating: "(24)",
      mainImage: "/main-card-9.png",
      topRightImage: "/right-top-card-9.png",
      bottomRightImage: "/right-bottom-card-9.png",
      ratingStars: "/star-icons.png",
      avatar: "/avater-card-9.png",
    },
  ];

  return (
    <section className="flex flex-col gap-[23px] w-full py-[75px] pl-[120px] pb-[74.5px] max-[1370px]:pl-[80px] max[1100px]:pl-[50px] max-[1000px]:pl-[25px]">
            <div className="pr-[120px] max-[1370px]:pr-[80px] max[1100px]:pr-[50px] max-[1000px]:pr-[25px] flex justify-between items-center max-[767px]:flex-col max-[767px]:gap-5">
                 <h1 className="w-[276px] font-['Exo2'] text-white text-[37.5px] font-semibold leading-[100%] max-[767px]:text-[28px] max-[767px]:text-center">Top Creator</h1>
                 <button className="rounded-[30px] cursor-pointer transform transition-transform duration-300 hover:scale-90  hover:bg-[#d3f85a]/90 w-[158.98px] h-[48.98px] bg-[#d3f85a] text-[#040914]  text-base leading-[100%] font-semibold  font-['Exo2'] ">See All</button>
            </div>
      <div className="grid grid-cols-5 max-[1050px]:grid-cols-4 max-[879px]:grid-cols-3 max-[700px]:grid-cols-2  max-[500px]:grid-cols-1  max-[1050px]:justify-items-center   max-[1050px]:justify-center gap-[30px] pr-[187.5px] pt-[37.5px] max-[1370px]:pr-[100px] max[1100px]:pr-[50px] max-[1000px]:pr-[25px]">
        {nftCards.map((card, index) => (
          <Card
            key={`card-row1-${index}`}
            className="w-[202.5px]  max-[500px]:w-[100%]  h-[225px] bg-[#ffffff0f] rounded-[3px] shadow-[0px_7.5px_30px_#00000012] border-0"
          >
            <CardContent className="relative p-0 h-full">
              <img
                className="absolute w-[68px] h-[75px] top-0 max-[500px]:w-[40%]  right-0"
                alt="Rectangle"
                src={card.topRightImage}
              />

              <img
                className="absolute w-[68px] h-[75px] max-[500px]:w-[40%]  top-[82px] right-0 object-cover"
                alt="Rectangle"
                src={card.bottomRightImage}
              />

              <img
                className="absolute w-32 h-[158px] max-[500px]:w-[50%]  top-0 left-0 object-cover"
                alt="Rectangle"
                src={card.mainImage}
              />

              <div className="absolute w-[182px] h-[47px] top-[168px] left-[11px]">
                <div className="absolute top-2 left-[52px] [font-family:'Exo2'] font-semibold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {card.name}
                </div>

                <div className="absolute top-3 left-40 [font-family:'Exo2'] font-normal text-white text-[9px] tracking-[0] leading-[normal]">
                  {card.rating}
                </div>

                <img
                  className="absolute w-[65px] h-[11px] top-[27px] left-[52px]"
                  alt="Group"
                  src={card.ratingStars}
                />

                <img
                  className="absolute w-[45px] h-[47px] top-0 left-0"
                  alt="Group"
                  src={card.avatar}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
