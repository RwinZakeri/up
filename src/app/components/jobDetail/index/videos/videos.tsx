import AnimateLine from "@/modules/animateLine/animateLine";
import { Box } from "@mui/material";
import jobDetail from "@/assets/images/videos/job-detail.jpg"
import Link from "next/link";
import Image from "next/image";
const Videos = () => {
  return (
    <Box className="pt-[30px]">
      <h2 className="text-[22px]"> ویدئو </h2>
      <Box className="w-[15%]">
        <AnimateLine />
      </Box>
      <Box>
        <Link href="">
           <Image alt="" src={jobDetail}></Image>
        </Link>
      </Box>
    </Box>
  );
};

export default Videos;
