import myImage from "@/assets/images/company/company-img1.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const ExprienceCard = () => {
  return (
    <Box>
      <Box className="flex gap-3">
        <Box>
          <Image
            src={myImage}
            alt="company"
            className="w-16 rounded-full"
            width={150}
            height={150}
          />
        </Box>
        <Box className="mb-2">
          <Typography className="text-xl font-bold mb-1">تجربه کاری</Typography>
          <Typography className="text-gray-500 text-base">کدنویسی</Typography>
        </Box>
      </Box>
      <Box className="pr-[75px] flex gap-10">
        <Typography className="text-gray-500 text-base flex items-center">
          <AccessTimeIcon className="text-highGreen ml-1" fontSize="small" />
          دی 1400 - بهمن 1400 - 3 سال
        </Typography>
        <Typography className="text-gray-500 text-base flex items-center">
          <LocationOnIcon className="text-highGreen text-lg ml-1" />
          ایران تهران
        </Typography>
      </Box>
    </Box>
  );
};

export default ExprienceCard;
