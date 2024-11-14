import AnimateLine from "@/modules/animateLine/animateLine";
import { Box } from "@mui/material";
import jobDetail1 from "@/assets/images/portfolio/portfolio-1.jpg"
import jobDetail2 from "@/assets/images/portfolio/portfolio-2.jpg"
import jobDetail3 from "@/assets/images/portfolio/portfolio-3.jpg"
import jobDetail4 from "@/assets/images/portfolio/portfolio-4.jpg"
import Image from "next/image";
const Portfolio = () => {
  return (
    <Box>
      <h2 className="text-[22px]">نمونه کارها ما</h2>
      <Box className="w-[30%]">
        <AnimateLine />
      </Box>
      <Box className="w-full flex flex-wrap gap-x-5 justify-center items-center ">
        <Box className="lg:w-[23%] md:w-1/3"><Image src={jobDetail1} alt=""></Image></Box>
        <Box className="lg:w-[23%] md:w-1/3"><Image src={jobDetail2} alt=""></Image></Box>
        <Box className="lg:w-[23%] md:w-1/3"><Image src={jobDetail3} alt=""></Image></Box>
        <Box className="lg:w-[23%] md:w-1/3"><Image src={jobDetail4} alt=""></Image></Box>

      </Box>
    </Box>
  );
};

export default Portfolio;
