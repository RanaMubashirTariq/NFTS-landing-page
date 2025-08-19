"use client"
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
import SignUpModalDemo from "./screens/SingUp/SignUp"; 
import SignInModalDemo from "./screens/SignIn/SignIn";
import React, { useState } from "react";



export default function Home() {
      const [openSignIn, setOpenSignIn] = useState(false);
      const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <div className="overflow-x-hidden w-full bg-[#040914] ">
                <NavbarSection onSignInClick={() => setOpenSignIn(true)}  onSignUpClick={() => setOpenSignUp(true)} />

         {openSignIn && (
  <SignInModalDemo open={openSignIn} onClose={() => setOpenSignIn(false)} />
)}

{openSignUp && (
  <SignUpModalDemo open={openSignUp} onClose={() => setOpenSignUp(false)} />
)}                 
                       {/* <SignInModalDemo/> */}

                {/* <SignupForm/> */}
                <TopHeaderSubsection/>
               <FeatureProductSubsection/>
               <div id="how-it-works">
                <CategoriesSubsection/>
                </div>

                <div id="explore">
                <FrameWrapperSubsection/>
                </div>

                

                <div id="following">
                <SubscribeSubsection/>
                </div>
                 <FrameSubsection/>
                <OverlapGroupWrapperSubsection/>
                <UserFeedbackSubsection/>
                <div id="community">
                <FooterSubsection/>
                </div>
    </div>
  );
}
