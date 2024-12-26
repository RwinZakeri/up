import AnimateLine from "@/modules/animateLine/animateLine";
import { Box, Typography } from "@mui/material";
import RecentSentJobCardContainer from "./recentSentJobCardContainer";

const RecentSentJob = () => {
  return (
    <Box className="w-full text-center py-12 px-4 bg-lightGray">
      <Typography variant="h2" className="text-2xl md:text-4xl font-medium">
        فرصت اخیر ارسال شده
      </Typography>
      <AnimateLine />
      {/* <Typography className="text-gray-400 md:text-lg mx-auto md:w-2/5">
        ما نظرات کاربران خود را جمع‌آوری می‌کنیم تا بتوانید نظر صادقانه‌ای در
        مورد تجربه واقعی وب‌سایت ما داشته باشید!
      </Typography> */}
      {/* card container */}
      <RecentSentJobCardContainer />
    </Box>
  );
};

export default RecentSentJob;
