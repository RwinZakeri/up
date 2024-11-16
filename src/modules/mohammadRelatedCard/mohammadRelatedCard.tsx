import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import myImg from "@/assets/images/recent-job/recent-job1.jpg";

const JobCard = () => {
  return (
    <Box className="w-full px-4 py-6 rounded-xl bg-mainWhite shadow-[0_3px_10px_rgba(0,0,0,0.2)] group hover:-translate-y-2 transition-all duration-500">
      {/* Bookmark Button */}
      <Button
        className="absolute top-6 left-4 p-0"
        aria-label="bookmark"
      >
        <BookmarkBorderIcon className="text-gray-400" />
      </Button>

      {/* Job Content */}
      <Box className="flex flex-col md:flex-row gap-4">
        {/* Image */}
        <Image
          src={myImg}
          alt="Job image"
          className="w-16 h-16 rounded-full"
          width={64}
          height={64}
        />

        {/* Job Details */}
        <Box className="flex-1">
          <Typography className="text-xl font-bold group-hover:text-highGreen transition-colors">
            طراح محصول
          </Typography>
          <Box className="flex gap-6 mt-3">
            <Typography className="text-sm text-gray-500 flex items-center">
              <BusinessCenterIcon className="text-highGreen mr-1" fontSize="small" />
              طراحی
            </Typography>
            <Typography className="text-sm text-gray-500 flex items-center">
              <AccessTimeIcon className="text-highGreen mr-1" fontSize="small" />
              ارسال شده 2 هفته پیش
            </Typography>
          </Box>
          <Typography className="text-sm text-gray-500 flex items-center mt-2">
            <LocationOnIcon className="text-highGreen mr-1" fontSize="small" />
            ایران استان تهران میدان آزادی
          </Typography>
        </Box>
      </Box>

      {/* Job Footer */}
      <Box className="flex flex-wrap items-center justify-between mt-4">
        {/* Job Tags */}
        <Box className="flex gap-2">
          <Typography className="px-4 py-1.5 text-sm text-highGreen bg-lightGreenXXs rounded-full">
            تمام وقت
          </Typography>
          <Typography className="px-4 py-1.5 text-sm text-lightOrange bg-lightRed rounded-full">
            فریلنسر
          </Typography>
          <Typography className="px-4 py-1.5 text-sm text-pink bg-lightPink rounded-full">
            داخلی
          </Typography>
          <Typography className="px-4 py-1.5 text-sm text-mainRed bg-lightXRed rounded-full">
            فوری
          </Typography>
        </Box>

        {/* Salary Info */}
        <Box className="flex items-center gap-1 text-sm text-gray-500 mt-2 md:mt-0">
          <Typography className="font-medium text-gray-800">150 تا 180 تومان</Typography>
          <Typography>/هر هفته</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default JobCard;
