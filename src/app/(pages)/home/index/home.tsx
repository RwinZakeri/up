import BannerArea from "@/app/components/home/index/bannerArea/bannerArea";
import DreamJob from "@/app/components/home/index/dreamJob/dreamJob";
import SkillOverView from "@/app/components/home/index/skillOverView/skillOverView";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box className="">
      <Box className="bg-lightGreen/10 ">
        <BannerArea />
      </Box>
      <SkillOverView />
      <DreamJob />
    </Box>
  );
};

export default HomePage;
