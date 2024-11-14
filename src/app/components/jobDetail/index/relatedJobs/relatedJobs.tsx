import jobImage from "@/assets/images/find-jobs/find-jobs1.jpg";
import AnimateLine from "@/modules/animateLine/animateLine";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import SendIcon from "@mui/icons-material/Send";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
const RelatedJobs = () => {
  return (
    <Box className="mt-[20px]">
      <h2 className="text-[22px]"> ویدئو </h2>
      <Box className="w-[15%]">
        <AnimateLine />
      </Box>
      <Box className="boxShadowJob mb-[10px] w-full p-4 relative overflow-hidden bg-mainWhite flex flex-col md:flex-row md:items-center gap-3 group">
        <Box className={"w-[12%]"}>
          <Image
            src={jobImage}
            alt="job image"
            className="w-fit h-full rounded-[50%] lg:group-hover:-translate-y-1.5 translate-y-3 transition-all duration-500"
          />
        </Box>
        <Button className="absolute m-0 block p-0 top-5 left-5">
          <TurnedInNotIcon className="text-gray-400" />
        </Button>
        <Box className=" w-full ">
          <Typography
            variant="h3"
            className="font-medium text-xl md:text-lg lg:group-hover:text-highGreen lg:transition-all lg:duration-300"
          >
            کارگردان خلاق
          </Typography>
          <Box
            sx={{
              marginY: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className="text-highGreen lg:w-2/5"
          ></Box>
          <Box className=" lg:w-full gap-x-10 gap-y-1 lg:flex lg:flex-wrap items-center">
            <Box
              sx={{ display: "flex", paddingY: 0.3 }}
              className="justify-start w-full"
            >
              <Typography className="text-sm  text-gray-400 ml-[50px]">
                <BusinessCenterIcon className="md:text-base text-highGreen text-lg ml-1" />
                مشاغل خودروسازی
              </Typography>
              <Typography
                variant="subtitle1"
                className="text-sm text-mainGray md:text-base"
              >
                <QueryBuilderIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
                ارسال شده 7 روز پیش
              </Typography>
            </Box>
            <Box sx={{ display: "flex", paddingY: 0.3 }}>
              <Typography className="md:text-base text-sm ml-1 text-gray-400 flex justify-center items-center">
                <LocationOnIcon className="text-highGreen text-lg ml-1" />
                <Typography variant="h3" className="md:text-base text-sm">
                  ایران استان تهران میدان آزادی
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", paddingY: 0.3 }}
              className="justify-between w-full"
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
                className="w-full "
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

              <Box className="flex justify-center items-center w-full">
                <Typography className="md:text-base text-sm ml-1 text-gray-400">
                  <DynamicFeedIcon className="md:text-base text-highGreen text-lg ml-1" />
                  حقوق :
                </Typography>
                <Typography variant="h3" className="md:text-base text-sm">
                  20 تا 30 تومان در ساعت
                </Typography>
              </Box>
            </Box>
          </Box>
   
        </Box>
      </Box>


      <Box className="boxShadowJob mb-[10px] w-full p-4 relative overflow-hidden bg-mainWhite flex flex-col md:flex-row md:items-center gap-3 group">
        <Box className={"w-[12%]"}>
          <Image
            src={jobImage}
            alt="job image"
            className="w-fit h-full rounded-[50%] lg:group-hover:-translate-y-1.5 translate-y-3 transition-all duration-500"
          />
        </Box>
        <Button className="absolute m-0 block p-0 top-5 left-5">
          <TurnedInNotIcon className="text-gray-400" />
        </Button>
        <Box className=" w-full ">
          <Typography
            variant="h3"
            className="font-medium text-xl md:text-lg lg:group-hover:text-highGreen lg:transition-all lg:duration-300"
          >
            کارگردان خلاق
          </Typography>
          <Box
            sx={{
              marginY: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className="text-highGreen lg:w-2/5"
          ></Box>
          <Box className=" lg:w-full gap-x-10 gap-y-1 lg:flex lg:flex-wrap items-center">
            <Box
              sx={{ display: "flex", paddingY: 0.3 }}
              className="justify-start w-full"
            >
              <Typography className="text-sm  text-gray-400 ml-[50px]">
                <BusinessCenterIcon className="md:text-base text-highGreen text-lg ml-1" />
                مشاغل خودروسازی
              </Typography>
              <Typography
                variant="subtitle1"
                className="text-sm text-mainGray md:text-base"
              >
                <QueryBuilderIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
                ارسال شده 7 روز پیش
              </Typography>
            </Box>
            <Box sx={{ display: "flex", paddingY: 0.3 }}>
              <Typography className="md:text-base text-sm ml-1 text-gray-400 flex justify-center items-center">
                <LocationOnIcon className="text-highGreen text-lg ml-1" />
                <Typography variant="h3" className="md:text-base text-sm">
                  ایران استان تهران میدان آزادی
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", paddingY: 0.3 }}
              className="justify-between w-full"
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
                className="w-full "
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

              <Box className="flex justify-center items-center w-full">
                <Typography className="md:text-base text-sm ml-1 text-gray-400">
                  <DynamicFeedIcon className="md:text-base text-highGreen text-lg ml-1" />
                  حقوق :
                </Typography>
                <Typography variant="h3" className="md:text-base text-sm">
                  20 تا 30 تومان در ساعت
                </Typography>
              </Box>
            </Box>
          </Box>
   
        </Box>
      </Box>


      <Box className="boxShadowJob mb-[10px] w-full p-4 relative overflow-hidden bg-mainWhite flex flex-col md:flex-row md:items-center gap-3 group">
        <Box className={"w-[12%]"}>
          <Image
            src={jobImage}
            alt="job image"
            className="w-fit h-full rounded-[50%] lg:group-hover:-translate-y-1.5 translate-y-3 transition-all duration-500"
          />
        </Box>
        <Button className="absolute m-0 block p-0 top-5 left-5">
          <TurnedInNotIcon className="text-gray-400" />
        </Button>
        <Box className=" w-full ">
          <Typography
            variant="h3"
            className="font-medium text-xl md:text-lg lg:group-hover:text-highGreen lg:transition-all lg:duration-300"
          >
            کارگردان خلاق
          </Typography>
          <Box
            sx={{
              marginY: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            className="text-highGreen lg:w-2/5"
          ></Box>
          <Box className=" lg:w-full gap-x-10 gap-y-1 lg:flex lg:flex-wrap items-center">
            <Box
              sx={{ display: "flex", paddingY: 0.3 }}
              className="justify-start w-full"
            >
              <Typography className="text-sm  text-gray-400 ml-[50px]">
                <BusinessCenterIcon className="md:text-base text-highGreen text-lg ml-1" />
                مشاغل خودروسازی
              </Typography>
              <Typography
                variant="subtitle1"
                className="text-sm text-mainGray md:text-base"
              >
                <QueryBuilderIcon sx={{ fontSize: 18, marginLeft: 0.5 }} />
                ارسال شده 7 روز پیش
              </Typography>
            </Box>
            <Box sx={{ display: "flex", paddingY: 0.3 }}>
              <Typography className="md:text-base text-sm ml-1 text-gray-400 flex justify-center items-center">
                <LocationOnIcon className="text-highGreen text-lg ml-1" />
                <Typography variant="h3" className="md:text-base text-sm">
                  ایران استان تهران میدان آزادی
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", paddingY: 0.3 }}
              className="justify-between w-full"
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
                className="w-full "
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

              <Box className="flex justify-center items-center w-full">
                <Typography className="md:text-base text-sm ml-1 text-gray-400">
                  <DynamicFeedIcon className="md:text-base text-highGreen text-lg ml-1" />
                  حقوق :
                </Typography>
                <Typography variant="h3" className="md:text-base text-sm">
                  20 تا 30 تومان در ساعت
                </Typography>
              </Box>
            </Box>
          </Box>
   
        </Box>
      </Box>
    </Box>
  );
};

export default RelatedJobs;
