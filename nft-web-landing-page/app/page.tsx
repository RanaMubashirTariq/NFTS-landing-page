import Image from "next/image";
import NavbarSection from "./screens/NavbarSection/NavbarSection";
import TopHeaderSubsection from "./screens/TopHeaderSubsection/TopHeaderSubsection";
import FeatureProductSubsection from "./screens/FeatureProductSubsection/FeatureProductSubsection";
import CategoriesSubsection from "./screens/CategoriesSubsection/CategoriesSubsection";
import FrameWrapperSubsection from "./screens/FrameWrapperSubsection/FrameWrapperSubsection";
import FrameSubsection from "./screens/FrameSubsection/FrameSubsection";
import SubscribeSubsection from "./screens/SubscribeSubsection/SubscribeSubsection";
import OverlapGroupWrapperSubsection from "./screens/OverlapGroupWrapperSubsection/OverlapGroupWrapperSubsection";
import UserFeedbackSubsection from "./screens/UserFeedbackSubsection/UserFeedbackSubsection";
import FooterSubsection from "./screens/FooterSubsection/FooterSubsection";

export default function Home() {
  return (
    <div className="overflow-hidden w-full">
                <NavbarSection/>
                <TopHeaderSubsection/>
               <FeatureProductSubsection/>
               <div id="how-it-works">
                <CategoriesSubsection/>
                </div>

                <div id="explore">
                <FrameWrapperSubsection/>
                </div>

                <FrameSubsection/>

                <div id="following">
                <SubscribeSubsection/>
                </div>

                <OverlapGroupWrapperSubsection/>
                <UserFeedbackSubsection/>
                <div id="community">
                <FooterSubsection/>
                </div>
    </div>
  );
}
