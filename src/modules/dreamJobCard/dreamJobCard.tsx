import jobImage from "@/assets/images/find-jobs/find-jobs1.jpg";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import SendIcon from "@mui/icons-material/Send";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const DreamJobCard = () => {
  return (
    <Box className="w-full p-4 relative bg-mainWhite">
      <Box className={"h-36"}>
        <Image
          src={jobImage}
          alt="job image"
          className="w-fit h-full rounded-xl"
        />
      </Box>
      <TurnedInNotIcon className="absolute top-5 text-gray-400 left-5" />
      <Box sx={{ paddingY: 2, display: "flex", alignItems: "center", gap: 1 }}>
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

      <Typography variant="h3" className="font-medium text-xl">
        مهندس اصلی توسعه (مدیر ارشد، فناوری)
      </Typography>
      <Box
        sx={{
          marginY: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="text-highGreen"
      >
        <Typography variant="subtitle1" className="text-sm">
          گروه توسعه
        </Typography>
        <Box>
          <Typography variant="subtitle1" className="text-sm text-mainGray">
            <QueryBuilderIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
            ارسال شده 7 روز پیش
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", paddingY: 0.3 }}>
          <Typography className="text-sm ml-1 text-gray-400">
            <BusinessCenterIcon className="text-highGreen text-lg ml-1" />
            دسته بندی :
          </Typography>
          <Typography variant="h3" className="text-sm">
            حسابداری و مالی
          </Typography>
        </Box>
        <Box sx={{ display: "flex", paddingY: 0.3 }}>
          <Typography className="text-sm ml-1 text-gray-400">
            <LocationOnIcon className="text-highGreen text-lg ml-1" />
            موقعیت :
          </Typography>
          <Typography variant="h3" className="text-sm">
            ایران استان تهران میدان آزادی
          </Typography>
        </Box>
        <Box sx={{ display: "flex", paddingY: 0.3 }}>
          <Typography className="text-sm ml-1 text-gray-400">
            <DynamicFeedIcon className="text-highGreen text-lg ml-1" />
            حقوق :
          </Typography>
          <Typography variant="h3" className="text-sm">
            20 تا 30 تومان در ساعت
          </Typography>
        </Box>
      </Box>
      <Button variant="contained" sx={{ marginTop: 2 }}>
        پذیرفتن
        <SendIcon className="rotate-180 mr-2 text-lg" />
      </Button>
    </Box>
  );
};

export default DreamJobCard;
