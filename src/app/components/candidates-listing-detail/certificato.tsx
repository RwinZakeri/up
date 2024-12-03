import AnimateLine from "@/modules/animateLine/animateLine";
import { Box, Typography } from "@mui/material";

const Certificato = () => {
  return (
    <Box className=" border-b-[1px] border-gray-500/30">
      <Typography className="text-xl font-bold">درباره</Typography>
      <Box className="w-fit">
        <AnimateLine />
      </Box>
    </Box>
  );
};

export default Certificato;
