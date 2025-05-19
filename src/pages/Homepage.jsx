import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
// import HeroSection from "../components/HeroSection";
import StaffCard from "../components/StaffCard";
import LeaderCard from "../components/LeaderCard";
import Percentage from "../components/Percentage";
import Loading from "../components/Loading";

const HeroSection = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../components/HeroSection"));
      }, 1000);
    })
);

const Homepage = () => {
  return (
    <div>
      <div>
        <Suspense fallback={<Loading />}>
          <HeroSection />
        </Suspense>
      </div>

      <div className="flex w-50% m-auto ">
        <StaffCard
          name="mike"
          department="Human resources"
          postion="Hr"
          image="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <StaffCard
          name="John"
          department="Human resources"
          postion="Hr"
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <StaffCard
          name="John"
          department="Human resources"
          postion="Hr"
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div className="flex">
        <LeaderCard />
      </div>

      <Percentage />
    </div>
  );
};

export default Homepage;
