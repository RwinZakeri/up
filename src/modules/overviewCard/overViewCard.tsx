import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface SkillOverViewCardProps {
  icon: React.ElementType; // Type for the icon prop
}

const SkillOverViewCard: FC<SkillOverViewCardProps> = ({
  icon: IconComponent,
}) => {
  return (
    <Box className="relative cursor-pointer w-full xl:w-[32%] lg:w-[48%] rounded-lg bg-lightGreenXXXs flex shrink-0 items-center p-8 gap-3 overflow-hidden group">
      {/* Sliding overlay for left-to-right animation */}
      <Box className="absolute p-28 inset-0 bg-highGreen transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"></Box>

      {/* Icon container */}
      <Box className="min-w-14 h-14 bg-lightGreenXs flex items-center justify-center group-hover:bg-mainWhite transition-all duration-1000 rounded-full gap-20 z-10">
        {/* Render the icon */}
        <IconComponent sx={{ fontSize: 27 }} className="text-lightGreen" />
      </Box>

      {/* Text container */}
      <Box className="w-full z-10 ">
        <Typography className="text-xl  group-hover:text-mainWhite transition-all duration-1000 font-medium">
          حساب داری
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            marginTop: 2.5,
          }}
        >
          <Typography className="font-light group-hover:text-mainWhite transition-all duration-1000 ">
            (موقعیت شغلی{22})
          </Typography>
          <ArrowBackIosNewIcon
            sx={{ fontSize: 17 }}
            className="group-hover:text-mainWhite transition-all duration-100"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SkillOverViewCard;
