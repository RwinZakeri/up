import type { Freelancer } from "@/types/type";
import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";

const HighRateFreeLanceCard = ({
  imgAddress,
  jobPosition,
  rate,
  rateMoney,
  title,
  description,
}: Freelancer) => {
  const totalStars = 5; // Total number of stars
  const goldStars = rate; // Number of gold stars based on the rate
  const blueStars = totalStars - goldStars; // Remaining stars are blue

  return (
    <Box className="flex flex-col hover:-translate-y-4 transition-all duration-500 items-center justify-center gap-3 boxShadowJob w-full md:w-[48.5%] mt-4  py-6 md:px-2 lg:px-6 lg:p-3 xl:p-7 rounded-xl">
      <Image
        src={imgAddress}
        alt="freelance"
        className="w-24 rounded-full border-4 border-highGreen"
        width={100}
        height={100}
      />
      <Typography className="2xl:w-96 w-fit text-center font-semibold text-lg">
        {title}
      </Typography>
      <Typography className="text-gray-400 text-base">{description}</Typography>
      <Box>
        <Rating name="read-only" value={1} readOnly />
      </Box>
      <Box className="flex flex-col md:flex-row items-center justify-between  md:px-0 lg:gap-8  w-full">
        <Box className="mb-2 md:mb-0 text-base  md:text-sm font-semibold text-black">
          <Typography sx={{ display: "flex", color: "gray" }}>
            موفقیت فرصت :{" "}
            <Typography variant="caption" className="text-black text-base">
              {jobPosition}%
            </Typography>
          </Typography>
        </Box>
        <Box className="text-base md:text-sm font-semibold text-black">
          <Typography sx={{ display: "flex", color: "gray" }}>
            امتیاز :{" "}
            <Typography variant="caption" className="text-black text-base">
              {rateMoney} تومان در ماه
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HighRateFreeLanceCard;
