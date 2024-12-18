import AboutArea from "@/components/about/about-area/aboutArea";
import CareerArea from "@/components/about/career-area/career-area";
import CounterArea from "@/components/about/counter-area/counter-area";
import FreelancersArea from "@/components/about/freelancers-area/freelancers-area";
import CommentsContainer from "@/components/home/index/comments/comments";
import InnerTitle from "@/components/jobs/index/innerTitle/innterTitle";
import type { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const AboutComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "درباره ما",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "فهرست مشاغل",
    currentAddress: "/jobs",
  };

  return (
    <Box className=" ">
      {/* <InnerTitleAbout/> */}
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <AboutArea />
      <CounterArea />
      <CareerArea />
      <CommentsContainer />
      {/* <HighRateFreeLanceCard/> */}
      <FreelancersArea />
    </Box>
  );
};

export default AboutComponent;
