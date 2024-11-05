import BannerFrom from "@/components/home/index/bannerArea/form/bannerFrom";
import PopularSearch from "@/modules/bannerArea/popularSeach/popularSearch";
import { Box, Typography } from "@mui/material";

const BannerArea = () => {
  return (
    <Box className="py-12 px-2">
      <Typography
        variant="h1"
        sx={{
          fontSize: 38,
          fontWeight: "normal",
          lineHeight: 1.4,
          marginBottom: 2,
        }}
      >
        بیش از
        <strong className="text-green-700 mx-2">+10,000</strong>
        شغل در نزدیکی شما موجود است.
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 15, marginBottom: 1 }}>
        شغل پیدا کنید، کارشناسان استخدام کنید یا در فروش و بازاریابی استخدام
        شوید
      </Typography>
      <BannerFrom />
      <PopularSearch />
    </Box>
  );
};

export default BannerArea;
