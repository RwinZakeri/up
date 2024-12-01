import CounterArea from "@/app/components/about/counter-area/counter-area";
import FreelancersArea from "@/app/components/about/freelancers-area/freelancers-area";
import CommentsContainer from "@/app/components/home/index/comments/comments";
import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import AnimateTitle from "@/modules/animateTitle/animateTitle";
import { InnerTitleInfo } from "@/types/type";
import { Box } from "@mui/material";

const CustomerFeedbackComponents = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "بازخورد مشتریان",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: "  بازخورد مشتریان ",
    currentAddress: "/jobs",
  };
  return (
    <Box>
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <Box className="md:w-1/2 mx-auto px-[20px] py-[70px]">
        <AnimateTitle
          title=" نظرات کاربران ما"
          description="ما نظرات کاربران خود را جمع‌آوری می‌کنیم تا بتوانید نظر صادقانه‌ای در مورد اینکه تجربه با وب‌سایت ما واقعاً چگونه است، دریافت کنید!"
        />
      </Box>
      <CommentsContainer/>
      <CounterArea/>
    </Box>
  );
};

export default CustomerFeedbackComponents;
