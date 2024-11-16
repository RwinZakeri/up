import jobDetail1 from "@/assets/images/portfolio/portfolio-1.jpg";
import jobDetail2 from "@/assets/images/portfolio/portfolio-2.jpg";
import jobDetail3 from "@/assets/images/portfolio/portfolio-3.jpg";
import jobDetail4 from "@/assets/images/portfolio/portfolio-4.jpg";
import AnimateLine from "@/modules/animateLine/animateLine";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const Portfolio = () => {
  return (
    <Box>
      <Typography className="text-2xl font-medium">نمونه کارها ما</Typography>
      <Box className="w-fit">
        <AnimateLine />
      </Box>
      <Box className="w-full flex flex-wrap gap-x-5 justify-center items-center ">
        <Box className="lg:w-[23%] md:w-1/3">
          <Image className="rounded-2xl" src={jobDetail1} alt=""></Image>
        </Box>
        <Box className="lg:w-[23%] md:w-1/3">
          <Image className="rounded-2xl" src={jobDetail2} alt=""></Image>
        </Box>
        <Box className="lg:w-[23%] md:w-1/3">
          <Image className="rounded-2xl" src={jobDetail3} alt=""></Image>
        </Box>
        <Box className="lg:w-[23%] md:w-1/3">
          <Image className="rounded-2xl" src={jobDetail4} alt=""></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
