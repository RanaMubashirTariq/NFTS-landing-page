import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function SubscribeSubsection  () {
  return (
    <section className="w-full h-[525px] max-[1000px]:h-[900px] max-[767px]:h-[780px] max-[500px]:h-[750px] relative">
      <div className="relative w-full h-[525px] max-[1000px]:h-[900px] max-[767px]:h-[780px]  max-[500px]:h-[750px] bg-[#ffffff0a]">
        <div className="absolute w-full max-w-[448px] max-[1000px]:max-w-[512px] max-[400px]:max-w-[100%] h-[313px] top-[104px] left-[120px] max-[1370px]:left-[80px] max-[1100px]:left-[50px] max-[1000px]:top-[550px] max-[767px]:top-[450px] max-[1000px]:left-1/2 max-[1000px]:-translate-x-1/2 max[999px]:px-[25px]">
          <div className="absolute top-[77px] left-0 max-[1000px]:left-1/2 max-[1000px]:-translate-x-1/2 [font-family:'Exo2'] font-light text-white text-3xl max-[767px]:text-[28px] tracking-[0] leading-[normal] whitespace-nowrap">
            News letter
          </div>

          <div className="absolute w-full  max-w-[448px]  max-[1000px]:w-full h-[313px] top-0 left-0 max-[1000px]:left-1/2 max-[1000px]:-translate-x-1/2 max-[1000px]:ml-[30px] max-[560px]:ml-0">
            <div className="absolute max-[400px]:w-[80%]  top-[130px] left-0  max-[1000px]:left-1/2 max-[1000px]:-translate-x-1/2 [font-family:'Exo2'] font-semibold text-white text-[37.5px] tracking-[0] leading-[normal] whitespace-nowrap max-[400px]:whitespace-normal max-[400px]:text-center max-[767px]:text-[28px] ">
              Subscribe Our Newsletter
            </div>

            <div className="absolute w-full max-[500px]:left-1/2 max-[500px]:-translate-x-1/2 max-w-[463.5px] max-[500px]:h-[60px] max-[500px]:max-w-[320px] max-[350px]:max-w-[260px] max-[1000px]:w-full h-[90px] top-[223px] max-[767px]:top-[180px] max-[400px]:top-[210px] -left-[15px] ">
              <div className="relative w-full h-full rounded-[45px] ">

                <Input
                  className="absolute w-full  max-[500px]:left-1/2 max-[500px]:-translate-x-1/2  h-full top-[15px] left-[15px] bg-white opacity-20  rounded-[45px] border-none text-white placeholder:text-white [font-family:'Exo2'] font-medium text-[22.5px] tracking-[0] leading-[normal] focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Enter Your Mail"
                  type="email"
                />

                <Button className="absolute cursor-pointer transform transition-transform duration-300 hover:scale-90 w-[60px] h-[60px] z-10 max-[500px]:w-[50px] max-[500px]:h-[50px] max-[500px]:top-[20px] max-[500px]:left-[400px] top-[30px] left-[388px] max-[350px]:left-[200px] max-[500px]:left-[260px] bg-[#d3f85a] hover:bg-[#d3f85a]/90 rounded-[50px] flex items-center justify-center">
                   <img src="/arrow-right.png" className="w-7 h-7 object-contain" alt="" />
                </Button>
              </div>
            </div>

            <div className="absolute w-[278px] h-[273px] top-0 left-[187px] rounded-[139.16px/136.73px] rotate-[177.74deg] blur-[147.75px] bg-[linear-gradient(141deg,rgba(123,164,154,0.4)_0%,rgba(21,151,119,0.4)_100%)]" />
          </div>

          <img
            className="absolute w-[187px] h-10 top-[9px] left-0 max-[1000px]:left-1/2 max-[1000px]:-translate-x-1/2"
            alt="Frame"
            src="/frame-443-1.png"
          />
        </div>

        <img
          className="absolute w-full max-w-[512px] h-[397px] top-[75px] left-[784px] max-[1370px]:left-[684px] max-[1100px]:left-[584px] max-[1100px]:max-w-[400px] max-[1000px]:max-w-[512px] max-[767px]:max-w-[400px] max-[767px]:h-[300px] max-[1000px]:left-1/2 max-[1000px]:-translate-x-1/2 max-[1000px]:px-[25px]"
          alt="Group"
          src='/subcribtion-img.png'
        />
      </div>
    </section>
  );
};
