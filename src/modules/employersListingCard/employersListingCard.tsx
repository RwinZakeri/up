import myImg from "@/assets/images/company/company-img4.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
const EmployersListingCard = () => {
  return (
    <Box className="flex items-center group transition-all duration-300 hover:-translate-y-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 w-fit rounded-xl gap-6 box-border">
      <Image
        src={myImg}
        width={250}
        height={250}
        className="w-20 h-20 rounded-full"
        alt="job"
      />
      <Box className="flex flex-col gap-3">
        <Typography className="group-hover:text-highGreen transition-all duration-300 flex text-xl">
          توسعه دهنده
        </Typography>
        <Typography className=" flex items-center">
          <LocationOnIcon className="text-highGreen text-xl" />
          هوستون
        </Typography>
        <Typography className="text-highGreen hover:text-black cursor-pointer transition-all duration-300">
          مشاغل آزاد - (15)
        </Typography>
      </Box>
    </Box>
  );
};

export default EmployersListingCard;
