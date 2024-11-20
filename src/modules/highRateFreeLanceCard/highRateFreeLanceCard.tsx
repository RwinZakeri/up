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
    <Box className="flex flex-col items-center justify-center gap-3 shadow-xl w-full md:w-fit p-6 lg:p-3 xl:p-10 rounded-xl">
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
      <Box className="flex flex-col md:flex-row items-center justify-between px-12  md:px-0 md:gap-8  w-full">
        <Box>
          <Typography sx={{ display: "flex", color: "gray" }}>
            موفقیت شغلی :{" "}
            <Typography
              variant="caption"
              className="text-base font-semibold text-black"
            >
              {jobPosition}%
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ display: "flex", color: "gray" }}>
            امتیاز :{" "}
            <Typography
              variant="caption"
              className="text-base font-semibold text-black"
            >
              {rateMoney} تومان در ماه
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HighRateFreeLanceCard;
