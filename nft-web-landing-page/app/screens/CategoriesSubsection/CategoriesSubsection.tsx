import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function CategoriesSubsection  ()  {
  const categories = [
    {
      name: "Photography",
      image: '/Photography.png',
    },
    {
      name: "Trading Cards",
      image: '/Trading-Cards.png',
    },
    {
      name: "Utility",
      image: '/Utility.png',
    },
    {
      name: "Vitual Wolds",
      image: "/Vitual-Wolds.png",
    },
    {
      name: "Music",
      image: '/Music.png',
    },
    {
      name: "Others",
      image: "/other.png",
    },
  ];

  return (
    <div className="w-full py-[75.25px] max-[1000px]:px-[25px] max-[767px]:py-[40px]">
      <div className="grid grid-cols-6 max-[900px]:grid-cols-3 max-[450px]:grid-cols-2 justify-items-center max gap-[14px] w-full max-w-[890px]  mx-auto">
        {categories.map((category, index) => (
          <Card
            key={index}
            className="w-[134px] h-[195px] bg-[#ffffff12] border-none rounded-xl cursor-pointer hover:bg-[#ffffff18] transition-colors"
          >
            <CardContent className="p-0 h-full flex flex-col">
              <div className="flex-1 p-[11px]">
                {category.image ? (
                  <img
                    className="w-[111px] h-28 object-cover rounded"
                    alt="Rectangle"
                    src={category.image}
                  />
                ) : (
                  <div className="w-[111px] h-28 bg-gray-300 rounded" />
                )}
              </div>
              <div className="pb-[30px] px-[11px]">
                <div className="[font-family:'Exo2'] font-bold text-white text-[15px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                  {category.name}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
