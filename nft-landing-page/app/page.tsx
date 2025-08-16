import CategoriesSubsection from "./screens/CategoriesSubsection/CategoriesSubsection";
import FeatureProductSubsection from "./screens/FeatureProductSubsection/FeatureProductSubsection";
import FooterSubsection from "./screens/FooterSubsection/FooterSubsection";
import FrameSubsection from "./screens/FrameSubsection/FrameSubsection";
import FrameWrapperSubsection from "./screens/FrameWrapperSubsection/FrameWrapperSubsection";
import NavbarSection from "./screens/NavbarSection/NavbarSection";
import OverlapGroupWrapperSubsection from "./screens/OverlapGroupWrapperSubsection/OverlapGroupWrapperSubsection";
import SubscribeSubsection from "./screens/SubscribeSubsection/SubscribeSubsection";
import TopHeaderSubsection from "./screens/TopHeaderSubsection/TopHeaderSubsection";
import UserFeedbackSubsection from "./screens/UserFeedbackSubsection/UserFeedbackSubsection";

export default function Home() {
  return (
    <div className="overflow-hidden">
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
