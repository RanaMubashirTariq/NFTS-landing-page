'use client'
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";

interface CounterProps {
  end: number;
  duration?: number; // animation time in ms
  triggerAt?: number; // scroll position (px) when counter starts
}

// Helper: format numbers with K/M/B suffix
const formatNumber = (num: number): string => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B+";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M+";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString() + " ";
};

const CounterUp: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  triggerAt = 0,
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    const startCounter = () => {
      if (started) return;

      // ✅ Case 1 & 3: Run immediately if >1100px or <767px
      if (screenWidth > 1100 || screenWidth < 767) {
        runCounter();
        return;
      }

      // ✅ Case 2: Between 1100px & 767px → wait for scroll trigger
      if (window.scrollY >= triggerAt) {
        runCounter();
      }
    };

    const runCounter = () => {
      setStarted(true);
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    // For immediate trigger
    if (screenWidth > 1100 || screenWidth < 767 || triggerAt === 0) {
      startCounter();
    }

    // Add scroll listener for the middle range
    window.addEventListener("scroll", startCounter);
    return () => window.removeEventListener("scroll", startCounter);
  }, [end, duration, triggerAt, started]);

  return <span>{formatNumber(count)}</span>;
};

// ✅ Statistics Data (numbers only, no "K+")
const statisticsData = [
  { value: 290000, label: "Artwork" },
  { value: 110000, label: "Artwork" },
  { value: 99000, label: "Creatores" },
];

export default function TopHeaderSubsection() {
  
  return (
    <section className="w-full h-auto relative bg-black-200 pl-[120px] pt-[176.75px] pb-[75px] max-[1370px]:pl-[80px] max-[1000px]:pt-[140px] max-[767px]:pt-[100px] max-[1000px]:pb-[40px] max-[1100px]:pl-[40px] max-[1000px]:pl-[25px]">
      <div className="relative w-full h-auto">
        <div className="absolute w-[278px] h-[273px] top-[80px] left-[80px] rounded-[139.16px/136.73px] rotate-[177.74deg] blur-[147.75px] bg-[linear-gradient(141deg,rgba(123,164,154,0.5)_0%,rgba(21,151,119,0.5)_100%)]" />
        
        {/* Desktop Statistics */}
        <div className="absolute w-[586px] h-[179px] top-[439px] left-0 flex items-center max-[1022px]:hidden">
          <img
            src="/circle-alpha.png"
            className="w-[178.5px] h-[178.5px] object-contain max-[1100px]:w-[150px] max-[1100px]:h-[150px]"
            alt=""
          />
          <div className="absolute w-[380px] h-[68px] top-14 left-[218px]">
            {statisticsData.map((stat, index) => (
              <div key={index} className="absolute top-0" style={{ left: `${index * 140}px` }}>
                <div className="[font-family:'Exo2'] font-bold text-white text-4xl leading-[34.5px] whitespace-nowrap">
                  <CounterUp end={stat.value} triggerAt={400} />+
                </div>
                <div className="absolute top-[50px] left-0.5 [font-family:'Exo2'] font-medium text-white text-[15px] whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-circle absolute top-[113px] left-[78px]" />

        {/* Desktop Layout */}
        <div className="absolute w-full h-[472px] top-0 left-0 max-[1022px]:hidden">
          <div className="absolute w-full max-w-[835px] h-[472px] top-0 left-[505px] max-[1350px]:max-w-[669px] max-[1350px]:h-[380px] max-[1250px]:max-w-[530px] max-[1250px]:left-[460px] max-[1250px]:h-[300px] max-[1250px]:top-10">
            <img
              className="w-full h-full top-[39px] object-cover"
              alt="Rectangle"
              src="/heroSection-img.png"
            />
            <div className="w-[86.25px] h-[86.25px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <img src="/video-icon.png" className="w-full h-full object-cover" alt="" />
            </div>
          </div>

          <div className="absolute w-[350px] top-10 left-0">
            <h1 className="[font-family:'Exo2'] font-semibold text-white text-[45px] leading-[56.2px]">
              Create, Explore & Collect Digital Art NFTs
            </h1>
            <p className="w-[396px] mt-6 [font-family:'Exo2'] font-light text-white text-[15px] leading-[23.2px]">
              Buy and sell NFTs from the world’s artists. More than 1000 premium
              digital artworks are available to be yours
            </p>
          </div>

          <div className="absolute w-[364px] top-[323px] left-0 flex gap-4">
            <Button className="font-['Exo2'] font-normal text-black text-[15px] leading-[100%] w-[172px] h-[52px] transform transition-transform duration-300 hover:scale-90 cursor-pointer bg-[#d3f85a] hover:bg-[#d3f85a]/90 rounded-[58.5px]">
                Start Collecting
            </Button>
            <Button
             
              className="w-[172px] h-[52px] transform transition-transform duration-300 hover:scale-90 cursor-pointer rounded-[58.5px] border border-[#d3f85a] text-white font-['Exo2'] leading-[100%]  text-[16.5px] font-normal hover:bg-[#d3f85a]/10"
            >
              Create NFTs
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="hidden max-[1022px]:flex max-[1022px]:flex-col max-[1022px]:items-center max-[1022px]:gap-6 pr-[16px]">
          
          {/* Image Stack */}
          <div className="relative w-full max-w-[700px] h-[480px] max-[767px]:h-auto">
            <img
              className="absolute w-[50%] max-w-[400px] top-[40px] left-0 object-cover rounded-lg"
              alt="Rectangle"
              src="/rectangle-3831.png"
            />
            <img
              className="absolute w-[48%] max-w-[380px] top-[40px] right-0 object-cover rotate-[5deg] rounded-lg"
              alt="Rectangle"
              src="/rectangle-3832.png"
            />
            <img
              className="absolute w-[45%] max-[500px]:w-[50%] max-[400px]:w-[53%] max-w-[375px] top-0 left-1/2 -translate-x-1/2 rounded-lg"
              alt="Rectangle"
              src="/rectangle-3830.png"
            />
          </div>

          {/* Statistics */}
          <div className="flex items-center gap-[30px] max-[470px]:gap-5 max-[400px]:flex-col max-[767px]:mt-[450px] max-[600px]:mt-[300px] max-[440px]:mt-[240px] max-[358px]:mt-[200px]">
            <img
              src="/circle-alpha.png"
              className="object-contain max-[1100px]:w-[150px] max-[1100px]:h-[150px] max-[767px]:w-[100px] max-[767px]:h-[100px] max-[470px]:w-[70px] max-[470px]:h-[70px]"
              alt=""
            />
            <div className="flex justify-center gap-6 flex-wrap items-center max-[470px]:gap-3">
              {statisticsData.map((stat, index) => (
                <div key={index} className="text-center min-w-[80px]">
                  <div className="[font-family:'Exo2'] font-bold text-white text-2xl sm:text-3xl max-[470px]:text-[22px]">
                  <CounterUp end={stat.value} triggerAt={400} />+

                  </div>
                  <div className="[font-family:'Exo2'] font-medium text-white text-sm max-[470px]:text-[13px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heading */}
          <h1 className="[font-family:'Exo2'] font-semibold text-white text-[36px] max-[767px]:text-[28px] max-[600px]:max-w-[450px] text-center px-2">
            Create, Explore & Collect Digital Art NFTs
          </h1>

          {/* Paragraph */}
          <p className="text-center text-white max-w-[500px] [font-family:'Exo2'] font-light text-sm sm:text-[15px] leading-[23.2px] px-2">
            Buy and sell NFTs from the world’s artists. More than 1000 premium
            digital artworks are available to be yours
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <Button className="w-[140px] h-[44px] sm:w-[150px] cursor-pointer sm:h-[48px] bg-[#d3f85a] rounded-[58.5px]">
              <span className="[font-family:'Exo2'] font-medium text-black text-[13px] sm:text-[14px]">
                Start Collecting
              </span>
            </Button>
            <Button
              variant="outline"
              className="w-[140px] h-[44px] sm:w-[150px] cursor-pointer sm:h-[48px] rounded-[58.5px] border border-[#d3f85a] text-white hover:bg-[#d3f85a]/10"
            >
              Create NFTs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
