import AnimateLine from "@/modules/animateLine/animateLine";
import { Box, Typography } from "@mui/material";

const EmployerLocation = () => {
  return (
    <Box className=" rounded-xl p-4 shadow-slate-400 boxShadowJob mt-[30px]">
      <Typography className="text-[22px]">محل کارفرما </Typography>
      <Box className="w-[30%]">
        <AnimateLine />
      </Box>
    </Box>
  );
};

export default EmployerLocation;
