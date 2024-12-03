import InnerTitle from "@/app/components/jobs/index/innerTitle/innterTitle";
import { InnerTitleInfo } from "@/types/type";
import { Box, Button } from "@mui/material";

const NotFoundComponents = () => {
  const innerTitleInfo: InnerTitleInfo = {
    title: "صفحه 404 ",
    mainRouteTitle: "خانه",
    mainRouteAddress: "/",
    current: " صفحه 404",
    currentAddress: "/jobDetail",
  };
  return (
    <Box className="">
      <InnerTitle innerTitleInfo={innerTitleInfo} />
      <Box className="mx-auto px-[100px] text-center">
        <h1 className="md:text-[250px] text-[100px]">
          4 <span className="text-[#00CA99]">0</span> 4
        </h1>
        <h3 className="text-[35px]">اوه! صفحه یافت نشد</h3>
        <p className="text-[15px] md:w-[50%] mx-auto mt-[10px] text-[#696969]">
          صفحه ای که به دنبال آن هستید ممکن است در صورت تغییر نام حذف شده باشد
          یا به طور موقت در دسترس نباشد.
        </p>
        <Button className="mt-[10px] bg-green-400 text-white hover:bg-black ">بازگشت به صفحه ی اصلی </Button>
      </Box>
    </Box>
  );
};

export default NotFoundComponents;
