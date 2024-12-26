import AnimateLine from "@/modules/animateLine/animateLine";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import HighRateFreeLanceCardContainer from "./highRateFreeLanceCardContainer";

const HighRateFreelancer = () => {
  return (
    <Box className="w-full">
      <Box className="standardContainer py-24  px-4">
        <Box className="w-full flex flex-col-reverse justify-center md:flex-row md:items-start items-center">
          <Box className="md:w-1/2">
            <Typography
              variant="h2"
              className="text-xl text-center md:text-start pt-7 md:pt-0 md:text-4xl font-medium "
            >
              پژوهشگران برتر
            </Typography>
            <Box className=" md:w-fit">
              <AnimateLine />
            </Box>
            {/* <Typography className="text-gray-400 text-center md:text-start">
              ما نظرات کاربران خود را جمع‌آوری می‌کنیم تا بتوانید نظر صادقانه‌ای
              در مورد تجربه واقعی وب‌سایت ما داشته باشید!
            </Typography> */}
          </Box>
          <Box className="w-1/2 flex items-start md:justify-end justify-center">
            <Link
              className="w-fit relative group text-center text-lightGreen after:content-[''] after:block after:absolute after:w-full after:bg-highGreen after:rounded-full after:left-0 after:h-0.5"
              href={"/candidates-listing"}
            >
              همه پژوهشگران رو مرور کنید
              <ArrowBackIosNewIcon
                sx={{ fontSize: 15 }}
                className="group-hover:-translate-x-3 transition-all duration-300"
              />
            </Link>
          </Box>
        </Box>
        {/* card container */}
        <HighRateFreeLanceCardContainer />
        {/* <HighRateFreeLanceCardContainer /> */}
        {/* <HighRateFreeLanceCardContainer /> */}
      </Box>
    </Box>
  );
};

export default HighRateFreelancer;
