import BannerFrom from "@/modules/form/bannerFrom";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
// images
import WomanShout from "@/assets/images/home-one/home-one-img.png";
import UsersProfile from "@/modules/usersProfile/usersProfile";
// fetcher

const BannerArea = async () => {
  return (
    <Box className="pt-28  px-3 lg:py-44   standardContainer relative">
      <Typography
        variant="h1"
        className="lg:max-w-[50%] font-medium lg:text-5xl xl:text-6xl xl:leading-[72px]"
        sx={{
          fontSize: 38,
          fontWeight: "normal",
          lineHeight: 1.4,
          marginBottom: 2,
        }}
      >
        بیش از
        <strong className="text-lightGreen mx-2">10,000+</strong>
        شغل در نزدیکی شما موجود است.
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 15, marginBottom: 1 }}>
        شغل پیدا کنید، کارشناسان استخدام کنید یا در فروش و بازاریابی استخدام
        شوید
      </Typography>
      <Box className="w-full  lg:w-3/5">
        <BannerFrom />
      </Box>
      {/* <PopularSearch popularSearch={popularSearch} /> */}
      <UsersProfile />
      <Box
        className="lg:pt-36"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image
          src={WomanShout}
          alt="woman"
          className="lgw:-1/3 max-h lg:absolute left-0 bottom-0"
        />
      </Box>
    </Box>
  );
};

export default BannerArea;
