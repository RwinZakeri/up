import AnimateTitle from "@/modules/animateTitle/animateTitle";
import { Box } from "@mui/material";
import SectionContact from "./sectionContact";

const SectionTitle = () => {
  return (
    <Box sx={{ paddingTop: 15, paddingX: 2 }}>
      <Box className="mb-5 mx-auto md:w-[50%]">
        <AnimateTitle
          title="اطلاعات ما"
          description="ما نظرات کاربران خود را جمع‌آوری می‌کنیم تا بتوانید نظر صادقانه‌ای در مورد اینکه تجربه با وب‌سایت ما واقعاً چگونه است، دریافت کنید!"
        />
      </Box>
      {/* <SkillOverViewCardContainer /> */}
      <SectionContact />
    </Box>
  );
};

export default SectionTitle;