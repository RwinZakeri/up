import CounterArea from "@/components/about/counter-area/counter-area";
import BannerArea from "@/components/home/index/bannerArea/bannerArea";
import CommentsContainer from "@/components/home/index/comments/comments";
import DreamJob from "@/components/home/index/dreamJob/dreamJob";
import HighRateFreelancer from "@/components/home/index/highRateFreelancer/HighRateFreelancer";
import RecentSentJob from "@/components/home/index/recentSentJob/recentSentJob";
// import SkillOverView from "@/app/components/home/index/skillOverView/skillOverView";
import db from "@/db/db.json";
import type { commentsSwiper } from "@/types/type";
import { Box } from "@mui/material";
const HomePage = () => {
  const commentSlider: commentsSwiper[] = db.commentSlider;
  const hamkaran: commentsSwiper[] = db.hamkar;

  return (
    <Box className="">
      <Box className="bg-lightGreenLowOpacity">
        <BannerArea />
      </Box>
      {/* <SkillOverView /> */}
      <DreamJob />
      <CommentsContainer data={commentSlider} />
      <CommentsContainer data={hamkaran} />
      {/* <CommentsContainer /> */}
      <HighRateFreelancer />
      <RecentSentJob />
      <CounterArea />
      {/* <PricingTable /> */}
    </Box>
  );
};

export default HomePage;
