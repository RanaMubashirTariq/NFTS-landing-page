import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function UserFeedbackSubsection  () {
  const feedbackData = [
    {
      name: "Ronald Richards",
      role: "Product designer",
      quote:
        'Friendly service and health service, always care and nice. keep up"',
      avatar: "/avater-feed-1.png",
      rating: "complete-star.png",
    },
    {
      name: "Cameron Williamson",
      role: "Model & Actor",
      quote:
        'Friendly service and health service, always care and nice. keep up"',
      avatar: "/avater-feed-2.png",
      rating: "complete-star.png",
    },
    {
      name: "Bessie Cooper",
      role: "Art Director",
      quote:
        'Friendly service and health service, always care and nice. keep up"',
      avatar: "/avater-feed-3.png",
      rating: "complete-star.png",
    },
  ];

  return (
    <section className="w-full relative pl-[120px] pt-[77.83px] mt-[150px] max-[840px]:mt-[100px] max-[700px]:mt-[55px] max-[560px]:mt-0 pb-[75.75px] max-[1370px]:pl-[80px] max-[1100px]:pl-[50px] max-[1000px]:px-[25px] max-[1000px]:pt-[40px] max-[1000px]:pb-[40px]">
      <h2 className="[font-family:'Exo2'] font-semibold text-white text-[37.5px] tracking-[0] leading-[100%] mb-[37.5px] max-[767px]:text-[28px] max-[767px]:mb-5 max-[767px]:text-center">
        User Feedback
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3   gap-[22.5px]">
        {feedbackData.map((feedback, index) => (
          <Card
            key={index}
            className=" w-full max-w-[427px] max-[767px]:max-w-[100%] h-auto bg-[#ffffff0a] shadow-[box-shadow:15px_10.5px_45px_0px_#0000000D;
] rounded-xl blur-[15px_10.5px_45px_0px_#0000000d] border-0"
          >
            <CardContent className="p-[30px] h-full flex flex-col">
              <div className="flex items-start gap-[11px] mb-[18px]">
                <img
                  className="w-[42px] h-11 object-cover rounded"
                  alt={`${feedback.name} avatar`}
                  src={`${feedback.avatar}`}
                />
                <div className="flex-1">
                  <div className="[font-family:'Saira'] font-semibold text-white text-lg tracking-[0] leading-[19.5px] max-[950px]:whitespace-wrap">
                    {feedback.name}
                  </div>
                  <div className="[font-family:'Saira'] font-normal text-white text-[9.8px] tracking-[0] leading-[15px] mt-[5px] ">
                    {feedback.role}
                  </div>
                </div>
              </div>

              <div className="[font-family:'Roboto'] w-full max-w-[275px] font-normal text-white text-lg tracking-[0] leading-[22.5px] mb-4 max-[1000px]:text-[16px] max-[1000px]:leading-[20px]">
                {feedback.quote}
              </div>

              <img
                className="w-[131px] h-[19px] mt-auto"
                alt="Rating stars"
                src={`${feedback.rating}`}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
