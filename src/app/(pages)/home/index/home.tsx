import BannerArea from "@/app/components/home/index/bannerArea/bannerArea";
import SkillOverView from "@/app/components/home/index/skillOverView/skillOverView";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box className="">
      <Box className="bg-lightGreen/10 ">
        <BannerArea />
      </Box>
      <SkillOverView />
    </Box>
  );
};

export default HomePage;
