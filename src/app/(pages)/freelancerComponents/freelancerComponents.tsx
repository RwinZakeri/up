import CareerArea from "@/components/about/career-area/career-area";
import HighRateFreelancer from "@/components/home/index/highRateFreelancer/HighRateFreelancer";
import InnerTitle from "@/components/jobs/index/innerTitle/innterTitle";
import { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const FreelancerComponents = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "فریلنسر ",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "فریلنسر",
    currentAddress: "/jobs",
  };
  return (
    <Box className="">
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      {/* <HighRateFreeLanceCardContainer/> */}
      <Box className="px-[50px]">
        <HighRateFreelancer />
      </Box>
      <CareerArea />
    </Box>
  );
};

export default FreelancerComponents;
