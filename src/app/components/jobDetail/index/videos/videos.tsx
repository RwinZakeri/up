import jobDetail from "@/assets/images/videos/job-detail.jpg";
import AnimateLine from "@/modules/animateLine/animateLine";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const Videos = () => {
  return (
    <Box className="pt-[30px]">
      <Typography className="text-2xl font-medium">ویدئو</Typography>
      <Box className="w-fit">
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
