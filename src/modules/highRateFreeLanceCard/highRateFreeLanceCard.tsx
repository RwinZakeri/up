import type { Freelancer } from "@/types/type";
import StarIcon from "@mui/icons-material/Star";
import { Box, List, ListItem, Typography } from "@mui/material";
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
    <Box className="flex flex-col items-center justify-center gap-4 shadow-xl w-fit p-4 rounded-xl">
      <Image
        src={imgAddress}
        alt="freelance"
        className="w-20 rounded-full border-4 border-highGreen"
        width={100}
        height={100}
      />
      <Typography className="font-medium">{title}</Typography>
      <Typography className="text-gray-400">{description}</Typography>
      <List sx={{ display: "flex", gap: 1 }}>
        {/* Render gold stars */}
        {Array.from({ length: goldStars }).map((_, index) => (
          <ListItem sx={{ padding: 0 }} key={`gold-${index}`}>
            <StarIcon className="text-gold text-[20px]" />
          </ListItem>
        ))}
        {/* Render blue stars */}
        {Array.from({ length: blueStars }).map((_, index) => (
          <ListItem sx={{ padding: 0 }} key={`blue-${index}`}>
            <StarIcon className="text-mainGray text-[20px]" />
          </ListItem>
        ))}
      </List>
      <Box className="flex flex-col md:flex-row items-center justify-between px-12 md:px-0 gap-2 md:gap-8">
        <Box>
          <Typography sx={{ display: "flex", color: "gray" }}>
            موفقیت شغلی :{" "}
            <Typography variant="caption" className="text-base text-black">
              {jobPosition}%
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ display: "flex", color: "gray" }}>
            امتیاز :{" "}
            <Typography variant="caption" className="text-base text-black">
              {rateMoney} تومان در ماه
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HighRateFreeLanceCard;
