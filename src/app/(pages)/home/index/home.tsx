import BannerArea from "@/components/home/index/bannerArea/bannerArea";
import CommentsContainer from "@/components/home/index/comments/comments";
import DreamJob from "@/components/home/index/dreamJob/dreamJob";
import HighRateFreelancer from "@/components/home/index/highRateFreelancer/HighRateFreelancer";
import RecentSentJob from "@/components/home/index/recentSentJob/recentSentJob";
import SkillOverView from "@/components/home/index/skillOverView/skillOverView";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box className="">
      <Box className="bg-lightGreenLowOpacity">
        <BannerArea />
      </Box>
      <SkillOverView />
      <DreamJob />
      <CommentsContainer />
      <HighRateFreelancer />
      <RecentSentJob />
      {/* <PricingTable /> */}
    </Box>
  );
};

export default HomePage;
