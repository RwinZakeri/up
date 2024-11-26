import myProf from "@/assets/images/freelancers/freelancers-img1.jpg";
import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";
const OtherCandidateCard = () => {
  return (
    <Box className="w-full flex gap-2 pb-3 border-b-[1px] border-gray-600/10">
      <Box>
        <Image
          src={myProf}
          className="w-16"
          width={250}
          height={250}
          alt="prof"
        />
      </Box>
      <Box>
        <Typography className="font-semibold text-lg mb-1">فرناس جک</Typography>
        <Typography className="text-sm text-gray-400 mb-2.5">
          طراحی کاربری
        </Typography>
        <Rating name="read-only" size="small" value={2} readOnly />
      </Box>
    </Box>
  );
};

export default OtherCandidateCard;
