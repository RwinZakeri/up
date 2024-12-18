import AnimateLine from "@/modules/animateLine/animateLine";
import OtherCandidateCard from "@/modules/otherCandidateCard/otherCandidateCard";
import { Box, Typography } from "@mui/material";

const OtherCandidateCardContainer = () => {
  return (
    <>
      <Typography className="text-xl font-semibold">سایر داوطلبان</Typography>
      <Box className="w-fit">
        <AnimateLine />
      </Box>
      <Box className="flex flex-col gap-5 mt-8">
        <OtherCandidateCard />
        <OtherCandidateCard />
        <OtherCandidateCard />
        <OtherCandidateCard />
        <OtherCandidateCard />
        <OtherCandidateCard />
      </Box>
    </>
  );
};

export default OtherCandidateCardContainer;
