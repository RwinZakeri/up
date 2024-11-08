import AnimateLine from "@/modules/animateLine/animateLine";
import { Box, Typography } from "@mui/material";
import DreamJobCardContainer from "./dreamJobCardContainer";

const DreamJob = () => {
  return (
    <Box className="w-full py-28 bg-lightGray">
      <Typography
        variant="h2"
        className="lg:text-3xl"
        sx={{ fontSize: 22, textAlign: "center", fontWeight: "medium" }}
      >
        مرور مشاغل بر اساس تخصص ها
      </Typography>
      <AnimateLine />
      <Typography sx={{ textAlign: "center", paddingY: 1 }}>
        144 شغل زنده - 20 شغل امروز اضافه شد.
      </Typography>
      <DreamJobCardContainer />
    </Box>
  );
};

export default DreamJob;
