import AboutArea from "@/app/components/about/about-area/aboutArea";
import CareerArea from "@/app/components/about/career-area/career-area";
import CounterArea from "@/app/components/about/counter-area/counter-area";
import FreelancersArea from "@/app/components/about/freelancers-area/freelancers-area";
import CommentsContainer from "@/app/components/home/index/comments/comments";
import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import type { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const AboutComponent = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "درباره ما",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "فرصت های همکاری",
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
