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
    <Box className="w-full p-4 relative overflow-hidden bg-mainWhite flex flex-col md:flex-row md:items-center gap-3 group boxShadowJob rounded-xl">
      <Box className={"h-36"}>
        <Image
          src={jobImage}
          alt="job image"
          className="w-fit h-full rounded-xl lg:group-hover:-translate-y-1.5 translate-y-3 transition-all duration-500"
        />
      </Box>
      <Button className="absolute m-0 block p-0 top-5 left-5">
        <TurnedInNotIcon className="text-gray-400" />
      </Button>
      <Box className="md:w-3/5 ">
        <Box
          sx={{ paddingY: 2, display: "flex", alignItems: "center", gap: 1 }}
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

        <Typography
          variant="h3"
          className="font-medium text-xl md:text-2xl lg:group-hover:text-highGreen lg:transition-all lg:duration-300"
        >
          مهندس اصلی توسعه (مدیر ارشد، فناوری)
        </Typography>
        <Box
          sx={{
            marginY: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="text-highGreen lg:w-2/5"
        >
          <Typography variant="subtitle1" className="text-sm md:text-base">
            گروه توسعه
          </Typography>
          <Box>
            <Typography
              variant="subtitle1"
              className="text-sm text-mainGray md:text-base"
            >
              <QueryBuilderIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
              ارسال شده 7 روز پیش
            </Typography>
          </Box>
        </Box>
        <Box className=" lg:w-full gap-x-10 gap-y-3 lg:flex lg:flex-wrap ">
          <Box sx={{ display: "flex", paddingY: 0.3 }} className="">
            <Typography className="text-sm ml-1 text-gray-400">
              <BusinessCenterIcon className="md:text-base text-highGreen text-lg ml-1" />
              دسته بندی :
            </Typography>
            <Typography variant="h3" className="text-sm md:text-base">
              حسابداری و مالی
            </Typography>
          </Box>
          <Box sx={{ display: "flex", paddingY: 0.3 }}>
            <Typography className="md:text-base text-sm ml-1 text-gray-400">
              <LocationOnIcon className="text-highGreen text-lg ml-1" />
              موقعیت :
            </Typography>
            <Typography variant="h3" className="md:text-base text-sm">
              ایران استان تهران میدان آزادی
            </Typography>
          </Box>
          <Box sx={{ display: "flex", paddingY: 0.3 }}>
            <Typography className="md:text-base text-sm ml-1 text-gray-400">
              <DynamicFeedIcon className="md:text-base text-highGreen text-lg ml-1" />
              حقوق :
            </Typography>
            <Typography variant="h3" className="md:text-base text-sm">
              20 تا 30 تومان در ساعت
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          className="lg:absolute lg:group-hover:bottom-[40%]  transition-all duration-300 lg:left-10 lg:-bottom-[101%] "
          sx={{ marginTop: 2 }}
          size="large"
        >
          جزئیات بیشتر
          <SendIcon className="rotate-180 mr-2 text-lg" />
        </Button>
      </Box>
    </Box>
  );
};

export default DreamJobCard;
