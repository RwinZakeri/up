import BannerArea from "@/app/components/home/index/bannerArea/bannerArea";
import CommentsContainer from "@/app/components/home/index/comments/comments";
import DreamJob from "@/app/components/home/index/dreamJob/dreamJob";
import HighRateFreelancer from "@/app/components/home/index/highRateFreelancer/HighRateFreelancer";
import RecentSentJob from "@/app/components/home/index/recentSentJob/recentSentJob";
import SkillOverView from "@/app/components/home/index/skillOverView/skillOverView";
import PricingTable from "@/modules/pricing/pricing";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box className="">
      <Box className="bg-lightGreen/10 ">
        <BannerArea />
      </Box>
      <SkillOverView />
      <DreamJob />
      <CommentsContainer />
      <HighRateFreelancer />
      <RecentSentJob />
      <PricingTable />
    </Box>
  );
};

export default HomePage;
