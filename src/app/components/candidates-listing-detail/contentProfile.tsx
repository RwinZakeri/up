import profileImage from "@/assets/images/freelancers/freelancers-img1.jpg";
import SocialShare from "@/modules/social-share/socialShare";
import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";

const ContentProfile = () => {
  return (
    <Box className="p-8 flex flex-col items-center gap-1 border-b-2 border-gray-500/20">
      <Image
        src={profileImage}
        className="w-24 box-content rounded-full border-[5px] border-highGreen"
        width={500}
        height={500}
        alt="prof"
      />
      <Typography className="pt-5 text-2xl font-semibold">جین بورک</Typography>
      <Typography className="py-2 text-gray-400 text-lg font-medium">
        جین بورک
      </Typography>
      <Rating size="large" name="read-only" value={1} readOnly />
      <SocialShare />
    </Box>
  );
};

export default ContentProfile;
