import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";

export default function OverlapGroupWrapperSubsection  () {
  return (
    <section className="relative w-full max-w-[917px] h-[438px] max-[400px]:h-[350px] mx-auto py-[74.5px] max-[1000px]:px-[50px] max-[767px]:px-[25px] max-[767px]:py-[40px]">
         <div className="font-['Exo2'] text-[37.5px] leading-[100%] tracking-[0] font-semibold text-white w-full text-center mb-[37.5px] ">
             <h1>Best Bid People</h1>
         </div>
          <img src="/pona-circle.png" className="absolute -right-[260px] top-[100px] w-[255px] max-[1300px]:w-[180px] max-[1300px]:-right-[180px] max-[1300px]:h-[300px] max-[1100px]:w-[100px] max-[1100px]:-right-[50px] max-[1000px]:right-0 max-[1100px]:h-[200px] max-[767px]:w-[70px] max-[767px]:right-0 max-[767px]:h-[100px] max-[767px]:top-[100px]  max-[1100px]:top-[50px]  h-[383px]" alt="" />
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          className="absolute w-[878px] h-[331px] max-[840px]:h-[270px] max-[560px]:h-[200px] max-[400px]:h-[150px] top-[107px] max-[400px]:top-[60px] left-1/2 transform -translate-x-1/2"
          alt="Ellipse"
          src="/half-circle.png"
        />

        <img
          className="absolute w-60 h-[244px] top-32 max-[400px]:top-[50px] left-0 max-[840px]:h-[200px] max-[840px]:w-40 max-[560px]:h-[100px] max-[560px]:w-30 max-[400px]:h-[60px] max-[400px]:w-30 object-cover max-[840px]:object-contain"
          alt="Rectangle"
          src="/first.png"
        />

          <img
          className="absolute w-[197.5px] h-[239.5px] max-[840px]:h-[200px] max-[840px]:w-40 max-[560px]:h-[130px] max-[560px]:w-30 max-[560px]:top-[20px] max-[400px]:h-[60px] max-[400px]:w-30 max-[840px]:object-contain top-[0px] right-1/2 translate-x-1/2 object-cover"
          alt="Rectangle"
          src="/second.png"
        />

        <img
          className="absolute w-60 h-[244px] max-[840px]:h-[200px] max-[840px]:w-40 max-[560px]:h-[100px] max-[560px]:w-30 max-[400px]:h-[60px] max-[400px]:w-30 max-[560px]:top-[120px] top-[85px] max-[400px]:top-[60px] right-0 object-cover max-[840px]:object-contain"
          alt="Rectangle"
          src="/third.png"
        />

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[197px] h-[239px]">
          <Avatar className="absolute w-[142px] h-[142px] max-[400px]:w-[50px] max-[400px]:h-[50px] top-[168px] max-[840px]:top-[130px] max-[560px]:top-[80px] max-[400px]:top-[50px] left-1/2 transform -translate-x-1/2 mb-[44px]">
            <AvatarImage src="/wrapper-logo.png" className="w-full h-full  object-cover ml-4 max-[400px]:ml-2" alt="Profile" />
          </Avatar>

          <div className="absolute top-[283px] max-[840px]:top-[240px] max-[500px]:text-[8px] max-[560px]:top-[180px] max-[400px]:top-[100px] left-1/2 transform -translate-x-1/2 [font-family:'Exo2'] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
            @Wakling houn
          </div>

          <div className="absolute top-[299px] max-[840px]:top-[270px] max-[500px]:text-[10px] max-[560px]:top-[200px] max-[400px]:top-[120px] left-1/2 transform -translate-x-1/2 [font-family:'Exo2'] font-bold text-white text-[19.5px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Till Head of Design
          </div>
        </div>

        <div className="absolute -bottom-[160px] max-[840px]:-bottom-[90px] max-[767px]:-bottom-[20px] max-[560px]:bottom-[50px] max-[400px]:bottom-[60px] left-1/2 transform -translate-x-1/2 flex gap-4">
          <Button
            variant="outline"
            size="icon"
            className="w-[60px] h-[60px] max-[840px]:w-[40px] max-[840px]:h-[40px]  rounded-[30px] border-[0.75px] border-solid border-white bg-transparent hover:bg-white/10"
          >
            <ChevronLeftIcon className="w-[18px] h-[18px] text-[#d3f85a]" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-[60px] h-[60px] max-[840px]:w-[40px] max-[840px]:h-[40px] rounded-[30px] border-[0.75px] border-solid border-white bg-transparent hover:bg-white/10"
          >
            <ChevronRightIcon className="w-[18px] h-[18px] text-[#d3f85a]" />
          </Button>
        </div>
      </div>
    </section>
  );
};
