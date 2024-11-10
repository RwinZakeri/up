import myImg from "@/assets/images/find-jobs/find-jobs1.jpg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const RecentSentJobCard = () => {
  return (
    <Box className="w-full h-full py-6 rounded-md bg-mainWhite p-4">
      <Box className="flex text-start items-start justify-between font-medium text-base gap-2">
        <Box className="w-20">
          <Image
            src={myImg}
            className=" rounded-full w-6"
            width={100}
            height={100}
            alt="img"
          />
        </Box>
        <Typography>کپی رایتر حرفه ای برای کسب تبلیغات</Typography>
        <Button sx={{ padding: 0, display: "block" }}>
          <BookmarkBorderIcon />
        </Button>
      </Box>
      <Box className="w-full flex items-center pr-14 gap-4">
        <Box className="flex items-center gap-1 pt-3">
          <BusinessCenterIcon className="text-highGreen" />
          <Typography className="pt-1.5 text-sm text-gray-600">
            اکانتینگ
          </Typography>
        </Box>
        <Box className="flex items-center gap-1 pt-3">
          <BusinessCenterIcon className="text-highGreen" />
          <Typography className="pt-1.5 text-sm text-gray-600">
            نیویورک
          </Typography>
        </Box>
      </Box>
      <Box
        className="pr-14"
        sx={{
          paddingY: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "start",
        }}
      >
        <Box>
          <Typography className="px-4 text-sm text-highGreen py-1.5 bg-lightGreenXXs w-fit rounded-full ">
            تمام وقت
          </Typography>
        </Box>
        <Box>
          <Typography className="px-4 text-sm text-lightOrange py-1.5 bg-lightRed w-fit rounded-full ">
            فریلنسر
          </Typography>
        </Box>
        <Box>
          <Typography className="px-4 text-sm text-pink py-1.5 bg-lightPink w-fit rounded-full ">
            داخلی
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentSentJobCard;
